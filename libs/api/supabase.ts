import { createClient } from "@supabase/supabase-js";
import { Database } from "@/libs/api/database.type";

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);
