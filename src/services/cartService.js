import { getSupabaseClient } from "../lib/supabase";
import { getCurrentUser } from "./authService";
import { normalizeProduct } from "./catalogService";

const CART_UPDATED_EVENT = "cart:updated";

async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("AUTH_REQUIRED");
  }

  return user;
}

function normalizeCartRow(row) {
  return {
    id: row.id,
    product_id: row.product_id,
    quantity: row.quantity,
    Product: normalizeProduct(row.product),
  };
}

function emitCartUpdated() {
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
}

export async function getCartItems() {
  const client = getSupabaseClient();
  const user = await getCurrentUser();

  if (!user) {
    return [];
  }

  const { data, error } = await client
    .from("cart_items")
    .select(
      "id, quantity, product_id, product:products!cart_items_product_id_fkey(id, name, description, price, image, image_path)"
    )
    .eq("user_id", user.id)
    .order("id", { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []).map(normalizeCartRow);
}

export async function getCartCount() {
  const items = await getCartItems();
  return items.reduce((total, item) => total + item.quantity, 0);
}

export async function addToCart(productId, quantity = 1) {
  const client = getSupabaseClient();
  const user = await requireUser();
  const normalizedProductId = Number(productId);

  const { data: existing, error: existingError } = await client
    .from("cart_items")
    .select("id, quantity")
    .eq("user_id", user.id)
    .eq("product_id", normalizedProductId)
    .maybeSingle();

  if (existingError) {
    throw existingError;
  }

  if (existing) {
    const { error } = await client
      .from("cart_items")
      .update({ quantity: existing.quantity + quantity })
      .eq("id", existing.id);

    if (error) {
      throw error;
    }

    emitCartUpdated();
    return;
  }

  const { error } = await client.from("cart_items").insert({
    user_id: user.id,
    product_id: normalizedProductId,
    quantity,
  });

  if (error) {
    throw error;
  }

  emitCartUpdated();
}

export async function updateCartItemQuantity(productId, quantity) {
  const client = getSupabaseClient();
  const user = await requireUser();
  const { error } = await client
    .from("cart_items")
    .update({ quantity })
    .eq("user_id", user.id)
    .eq("product_id", Number(productId));

  if (error) {
    throw error;
  }

  emitCartUpdated();
}

export async function removeCartItem(productId) {
  const client = getSupabaseClient();
  const user = await requireUser();
  const { error } = await client
    .from("cart_items")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", Number(productId));

  if (error) {
    throw error;
  }

  emitCartUpdated();
}

export async function subscribeToCartChanges(onChange) {
  const handleCartUpdated = () => {
    onChange();
  };

  const handleWindowFocus = () => {
    onChange();
  };

  window.addEventListener(CART_UPDATED_EVENT, handleCartUpdated);
  window.addEventListener("focus", handleWindowFocus);

  return () => {
    window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdated);
    window.removeEventListener("focus", handleWindowFocus);
  };
}
