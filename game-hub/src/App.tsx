import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

// import { Button } from '@chakra-ui/react';

function App() {
  // return <Button colorScheme="blue">Button</Button>;
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        {/* Nav */}
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        {/* Main */}
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
