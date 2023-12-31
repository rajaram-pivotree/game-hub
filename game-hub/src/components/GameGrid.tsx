import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';
import GamecardContainer from './GameCardContainer';
import { Genres } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamecardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GamecardContainer>
          ))}
        {data.map((game) => (
          <GamecardContainer key={game.id}>
            <Gamecard game={game}></Gamecard>
          </GamecardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
