import { PokemonProvider } from "@/context/PokemonContext";
import "@/styles/globals.scss";
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material/styles";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

declare module "@mui/material/styles" {
  export interface PaletteOptions {
    elements?: {
      [key: string]: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#E9363C",
    },
    elements: {
      normal: "#A8A878",
      fighting: "#C03028",
      flying: "#A890F0",
      poison: "#A040A0",
      ground: "#E0C068",
      rock: "#B8A038",
      bug: "#A8B820",
      ghost: "#705898",
      steel: "#B8B8D0",
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      psychic: "#F85888",
      ice: "#98D8D8",
      dragon: "#7038F8",
      dark: "#705848",
      fairy: "#EE99AC",
      unknown: "#808080", // grey, as it's "unknown"
      shadow: "#303030", // dark grey, shadow-like color
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <PokemonProvider>
          <Component {...pageProps} />
        </PokemonProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
