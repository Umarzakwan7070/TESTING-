import { createClient } from "@supabase/supabase-js";

// Publishable key — safe to expose client-side. Row Level Security on the
// coupon_leads table only allows anonymous INSERT, not SELECT, so this key
// can never be used to read back submitted emails.
const SUPABASE_URL = "https://bylzzzvkbxtumbynoqdp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WH7jSzrCbpt8A_auuh-E-A_ERspOOL8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
