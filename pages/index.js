import Link from "next/link";
import { getRandomQuote } from "../util/getRandomQuote";

export default function Home(props) {
	const { quote } = props;
   const quoteJsonString = JSON.stringify(quote, null, 2);
   return (
      <div className="mt-8 container mx-auto text-center max-w-md">
         <h1 className="text-5xl">gary.rest</h1>
         <p className="mt-2">Gary as a Service for Free</p>

         <div className="mt-7 flex justify-between">
            <Link href="/api">
               <a className="underline font-bold">Developer Api /api</a>
            </Link>
            <button className="" type="button">
               refrish
            </button>
         </div>
         <div className="mt-4 text-left rounded-lg bg-slate-600 text-white p-5">
            <pre>{quoteJsonString}</pre>
         </div>
      </div>
   );
}

export async function getServerSideProps() {
	const quote = await getRandomQuote();
	return {
		props: {
			quote
		}
	}
}
