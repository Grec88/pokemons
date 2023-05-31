import { useQuery } from "react-query";
import axios from "axios";

export interface PokemonOption {
  name: string;
  url: string;
}

export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonOption[];
}

async function fetchAllPokemon(
  offset = 0,
  limit = 500
): Promise<PokemonApiResponse> {
  const response = await axios.get<PokemonApiResponse>(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  return response.data;
}

export function useAllPokemon(offset?: number, limit?: number) {
  return useQuery(["pokemon", offset, limit], () =>
    fetchAllPokemon(offset, limit)
  );
}
