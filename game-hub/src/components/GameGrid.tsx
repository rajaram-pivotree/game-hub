import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import Gamecard from './Gamecard';
import GameCardSkeleton from './GameCardSkeleton';
import GamecardContainer from './GameCardContainer';
import { Genres } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
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
  );
};

export default GameGrid;
