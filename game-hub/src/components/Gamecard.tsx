import React from 'react';
import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CricticScore from './CricticScore';
import getCroppedImageUrl from '../hooks/image-url';
import Emojis from './Emojis';

interface Props {
  game: Game;
}

const Gamecard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CricticScore score={game.metacritic}></CricticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emojis rating={game.rating_top}></Emojis>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default Gamecard;
