import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  await process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = await process.env.NEXT_PUBLIC_SUPABASE_KEY;
const adminEmail = await process.env.ADMIN_EMAIL;

export const supabase = createClient(supabaseUrl, supabaseKey);