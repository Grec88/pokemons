import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { PokemonOption, useAllPokemon } from "@/queries/useAllPokemon";

export type Pokemon = {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
};

interface PokemonContextType {
  pokemon: Pokemon[];
  team: Pokemon[];
  selectPokemon: (id: number) => void;
}

function mapResultsToPokemon(results: PokemonOption[]): Pokemon[] {
  return results.map((result) => {
    const name = result.name;
    const id = Number(result.url.split("/").slice(-2)[0]);
    const imageUrl = "/pokemon.png";
    const types = ["fire"];
    return { name, id, types, imageUrl };
  });
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: PropsWithChildren) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([
    { name: "Pikachu", id: 1, types: ["electric"], imageUrl: "/pokemon.png" },
    { name: "Charmander", id: 2, types: ["fire"], imageUrl: "/pokemon.png" },
    { name: "Bulbasaur", id: 3, types: ["grass"], imageUrl: "/pokemon.png" },
  ]);
  const pokemons = useAllPokemon();
  useEffect(() => {
    if (pokemons.data && pokemons.status === "success" && !pokemons.error) {
      const pokemonData = mapResultsToPokemon(pokemons.data.results);
      setPokemon(pokemonData);
    }
  }, [pokemons.data]);
  const [team, setTeam] = useState<Pokemon[]>([]);

  const selectPokemon = (id: number) => {
    // ...
  };

  return (
    <PokemonContext.Provider value={{ team, pokemon, selectPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};
