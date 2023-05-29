import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Pokemon = {
  id: number;
  label: string;
  // ..
};

interface PokemonContextType {
  pokemon: Pokemon[];
  team: Pokemon[];
  addPokemon: () => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: PropsWithChildren) => {
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([
    { label: "Pikachu", id: 1 },
    { label: "Charmander", id: 2 },
    { label: "Bulbasaur", id: 3 },
  ]);

  const fetchPokemon = () => {
    // ...
  };

  const addPokemon = () => {
    // ...
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ team, pokemon, addPokemon }}>
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
