import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

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

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: PropsWithChildren) => {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([
    { name: "Pikachu", id: 1, types: ["electric"], imageUrl: "/pokemon.png" },
    { name: "Charmander", id: 2, types: ["fire"], imageUrl: "/pokemon.png" },
    { name: "Bulbasaur", id: 3, types: ["grass"], imageUrl: "/pokemon.png" },
  ]);

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
