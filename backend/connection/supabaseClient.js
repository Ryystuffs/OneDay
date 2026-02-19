import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

export const supabase = createClient('https://wppvzfmplngetnatqzal.supabase.co', 'sb_publishable_Zd5N1hLygbqiu97y5cBQdA_kyMIfoit' )

