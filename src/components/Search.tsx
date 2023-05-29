import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { usePokemonContext } from "@/context/PokemonContext";

export default function Search() {
  const { pokemon, addPokemon } = usePokemonContext();

  return (
    <Stack spacing={2} direction="row">
      <Autocomplete
        disablePortal
        id="pokemon-search"
        options={pokemon}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Pokemon" />}
      />
      <Button variant="contained">Add</Button>
    </Stack>
  );
}
