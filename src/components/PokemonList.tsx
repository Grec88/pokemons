import { Box, Card, Chip, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { usePokemonContext } from "@/context/PokemonContext";

function PokemonCard({
  imageUrl,
  name,
  types,
}: {
  imageUrl: string;
  name: string;
  types: string[];
}) {
  return (
    <Card
      sx={{
        display: "auto",
        flexGrow: 1,
        textAlign: "center",
        position: "relative",
      }}
    >
      <IconButton
        aria-label="delete"
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <DeleteIcon color="primary" />
      </IconButton>

      <Image src={imageUrl} alt={name} width={120} height={120} />

      <Box sx={{ px: 2, pb: 2 }}>
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          {name}
        </Typography>

        <Stack
          spacing={1}
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
        >
          {types.map((type, index) => {
            return (
              <Chip
                key={index}
                label={type}
                size="small"
                sx={{ bgcolor: `elements.${type}`, color: "white" }}
              />
            );
          })}
        </Stack>
      </Box>
    </Card>
  );
}

function PokemonList() {
  const { pokemon } = usePokemonContext();

  return (
    <Stack
      flexWrap="wrap"
      justify-content="space-around"
      gap={2}
      direction={{ xs: "column", sm: "row" }}
    >
      {pokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
          types={["grass", "fire"]}
        />
      ))}
    </Stack>
  );
}

export default PokemonList;
