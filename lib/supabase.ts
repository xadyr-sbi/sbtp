import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// for Server-Side Components / Route Handlers
export const createClient = () => createSupabaseClient(supabaseUrl, supabaseAnonKey)

// for Client-Side Components
export const createClientComponent = () => createSupabaseClient(supabaseUrl, supabaseAnonKey)
