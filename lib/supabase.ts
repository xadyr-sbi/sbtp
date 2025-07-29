import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// untuk API Route & Server Side
export const createClient = () => createSupabaseClient(supabaseUrl, supabaseAnonKey)

// untuk komponen Client Side
export const createClientComponent = () => createSupabaseClient(supabaseUrl, supabaseAnonKey)
