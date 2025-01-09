import { createClient } from "@supabase/supabase-js";

//accessing env.local to get environment variable that supabase automatiacally stores as available
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
