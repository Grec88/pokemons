import { PokemonProvider } from "@/context/PokemonContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </QueryClientProvider>
  );
}
