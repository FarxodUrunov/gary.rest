import { createClient } from "@supabase/supabase-js";

// const { NEXT_PUBLIC_URL, NEXT_PUBLIC_KEY } = process.env;

// const supabase = createClient(NEXT_PUBLIC_URL,NEXT_PUBLIC_KEY)

export async function getRandomQuote() {

	// const rows = await supabase.from('quotes').select('quote');

   return { quote: "Hey I am a quote 123"};
}
