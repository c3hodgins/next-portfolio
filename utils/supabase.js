import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  await process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = await process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);