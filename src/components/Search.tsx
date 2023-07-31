import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { usePokemonContext } from "@/context/PokemonContext";
import { Card } from "@mui/material";
import { useAllPokemon } from "@/queries/useAllPokemon";

export default function Search() {
  const { pokemon } = usePokemonContext();
  const pokemons = useAllPokemon();
  // console.log(pokemons.data);
  return (
    <Card sx={{ p: 2 }}>
      <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Autocomplete
          disablePortal
          id="pokemon-search"
          options={pokemon.map((pokemon) => pokemon.name)}
          onChange={(event: React.SyntheticEvent<Element, Event>, newValue) => {
            console.log(newValue);
          }}
          sx={{ flexGrow: 1 }}
          renderInput={(params) => <TextField {...params} label="Pokemon" />}
        />
        <Button sx={{ width: "100%", maxWidth: 150 }} variant="contained">
          Add
        </Button>
      </Stack>
    </Card>
  );
}
