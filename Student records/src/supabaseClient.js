import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wppvzfmplngetnatqzal.supabase.co'
const supabaseAnonKey = 'sb_publishable_Zd5N1hLygbqiu97y5cBQdA_kyMIfoit'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)