import { createClient, SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Configura SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en las variables de entorno.",
    );
  }

  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false },
    });
  }

  return client;
}
