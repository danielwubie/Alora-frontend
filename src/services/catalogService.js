import { getSupabaseClient } from "../lib/supabase";

const PRODUCTS_BUCKET =
  import.meta.env.VITE_SUPABASE_PRODUCTS_BUCKET || "product-images";

export function getFallbackProductImageUrl(name, category = "Product") {
  const text = encodeURIComponent(`${name || "Product"}\n${category}`);
  return `https://placehold.co/800x800/F5F1EB/624F39?text=${text}`;
}

function getPublicImageUrl(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("/")) {
    return path;
  }

  const client = getSupabaseClient();
  const { data } = client.storage.from(PRODUCTS_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export function normalizeProduct(product) {
  if (!product) {
    return null;
  }

  const productName = product.name ?? "Product";
  const categoryHint = product.category_name ?? product.category ?? "Product";

  return {
    ...product,
    Price: Number(product.Price ?? product.price ?? 0),
    image:
      getPublicImageUrl(product.image ?? product.image_path) ||
      getFallbackProductImageUrl(productName, categoryHint),
  };
}

export async function getCategoriesWithSubcategories() {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from("categories")
    .select("id, name, subcategories(id, name, category_id)")
    .order("id", { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []).map((category) => ({
    ...category,
    subcategories: category.subcategories || [],
  }));
}

export async function getProducts({ mode = "all", config } = {}) {
  const client = getSupabaseClient();
  let query = client
    .from("products")
    .select(
      "id, name, description, price, image, image_path, category_id, subcategory_id, created_at"
    )
    .order("id", { ascending: true });

  if (mode === "catag" && config) {
    query = query.eq("category_id", Number(config));
  }

  if (mode === "sub" && config) {
    query = query.eq("subcategory_id", Number(config));
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return (data || []).map(normalizeProduct);
}
