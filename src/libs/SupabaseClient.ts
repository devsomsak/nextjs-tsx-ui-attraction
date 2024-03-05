import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ahlwofrdleqzikoyhetg.supabase.co'
const supabaseKey = process.env.SUPABASE_API_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)