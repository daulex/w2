import { PRIVATE_SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://samubjlgkfyjnmsrwdwd.supabase.co';
const supabase = createClient(supabaseUrl, PRIVATE_SUPABASE_KEY);

export default supabase;