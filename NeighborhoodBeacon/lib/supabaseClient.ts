import 'react-native-url-polyfill/auto'; // Required for Supabase to work in React Native
import { createClient } from '@supabase/supabase-js';

// IMPORTANT: REMOVE HARDCODED VALUES AND USE ENVIRONMENT VARIABLES
// See instructions on how to set up environment variables for React Native.
// For now, using hardcoded values for quick testing.
const supabaseUrl = 'YOUR_SUPABASE_URL_HERE'; // Replace with your actual Supabase URL
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY_HERE'; // Replace with your actual Supabase anon key

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your environment variables or hardcoded values.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Optionally, you can disable auto-refreshing of tokens if you manage it manually
    // autoRefreshToken: true,
    // persistSession: true, // This is true by default
    // detectSessionInUrl: false, // Useful for server-side auth flows, disable for React Native
  },
});

// Example of how to use the client (optional, can be removed)
// async function getCountries() {
//   const { data, error } = await supabase.from('countries').select();
//   if (error) {
//     console.error('Error fetching countries:', error);
//   } else {
//     console.log('Countries:', data);
//   }
// }
// getCountries();
