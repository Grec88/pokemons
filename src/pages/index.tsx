import {
  Container,
  Typography,
  Box,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Search from "@/components/Search";
import PokemonList from "@/components/PokemonList";
import Stats from "@/components/Stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Team Builder</title>
        <meta name="description" content="Pokemon team builder app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Container maxWidth="md">
          <Box my={4}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Build a Pokemon Team
                </Typography>
              </Toolbar>
            </AppBar>
            <Stack spacing={2}>
              <Search />
              <PokemonList />
              <Stats />
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
