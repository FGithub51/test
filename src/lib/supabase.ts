import { createClient } from '@supabase/supabase-js';

const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

const supabaseUrl = (envUrl && isValidUrl(envUrl)) ? envUrl : 'https://placeholder.supabase.co';
const supabaseAnonKey = envKey || 'placeholder-key';

if (!envUrl || !envKey || !isValidUrl(envUrl)) {
    console.warn('Missing or invalid Supabase environment variables');
}

export const isConfigured = !!(envUrl && envKey && isValidUrl(envUrl));
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
