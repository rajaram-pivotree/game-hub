import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";


export interface Platform {
  id: number;
  name : string;
  slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms : {platform:Platform}[];
    metacritic: number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = (gameQuery : GameQuery) => useData<Game>
('/games',
[gameQuery], 
{params:
  {
  genres:gameQuery.genre?.id,
  platforms:gameQuery.platform?.id,
  ordering:gameQuery.sortOrder,
  search: gameQuery.searchText
}
}
);

export default useGames;