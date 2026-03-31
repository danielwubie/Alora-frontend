import { getSupabaseClient, isSupabaseConfigured } from "../lib/supabase";

let authListenerInitialized = false;

function isMissingSessionError(error) {
  return (
    error?.name === "AuthSessionMissingError" ||
    error?.message === "Auth session missing!"
  );
}

function clearLegacyAuthStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
}

function syncLegacyAuthStorage(session) {
  if (!session?.access_token || !session?.user?.id) {
    clearLegacyAuthStorage();
    return;
  }

  localStorage.setItem("token", session.access_token);
  localStorage.setItem("userId", session.user.id);
}

async function upsertProfile(user) {
  if (!user?.id) {
    return null;
  }

  const client = getSupabaseClient();
  const profilePayload = {
    id: user.id,
    email: user.email,
    name: user.user_metadata?.name || user.email?.split("@")[0] || "User",
  };

  const { data, error } = await client
    .from("profiles")
    .upsert(profilePayload, { onConflict: "id" })
    .select("id, name, email, avatar_path")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export function initializeAuthListener() {
  if (authListenerInitialized || !isSupabaseConfigured) {
    return;
  }

  const client = getSupabaseClient();
  client.auth.onAuthStateChange((_event, session) => {
    syncLegacyAuthStorage(session);
  });
  authListenerInitialized = true;
}

export function subscribeToAuthChanges(callback) {
  if (!isSupabaseConfigured) {
    return () => {};
  }

  const client = getSupabaseClient();
  const {
    data: { subscription },
  } = client.auth.onAuthStateChange((event, session) => {
    syncLegacyAuthStorage(session);
    callback(event, session);
  });

  return () => {
    subscription.unsubscribe();
  };
}

export async function getSession() {
  if (!isSupabaseConfigured) {
    clearLegacyAuthStorage();
    return null;
  }

  const client = getSupabaseClient();
  const {
    data: { session },
    error,
  } = await client.auth.getSession();

  if (error) {
    if (isMissingSessionError(error)) {
      clearLegacyAuthStorage();
      return null;
    }

    throw error;
  }

  syncLegacyAuthStorage(session);
  return session;
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured) {
    clearLegacyAuthStorage();
    return null;
  }

  const client = getSupabaseClient();
  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (error) {
    if (isMissingSessionError(error)) {
      clearLegacyAuthStorage();
      return null;
    }

    throw error;
  }

  return user ?? null;
}

export async function signInWithEmail({ email, password }) {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  syncLegacyAuthStorage(data.session);
  await upsertProfile(data.user);

  return data;
}

export async function signUpWithEmail({ name, email, password }) {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    throw error;
  }

  if (data.user) {
    await upsertProfile({
      ...data.user,
      email,
      user_metadata: {
        ...data.user.user_metadata,
        name,
      },
    });
  }

  syncLegacyAuthStorage(data.session);
  return data;
}

export async function getUserProfile() {
  const client = getSupabaseClient();
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const { data, error } = await client
    .from("profiles")
    .select("id, name, email, avatar_path")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }

  return upsertProfile(user);
}

export async function signOutUser() {
  const client = getSupabaseClient();
  const { error } = await client.auth.signOut();

  clearLegacyAuthStorage();

  if (error) {
    throw error;
  }
}
