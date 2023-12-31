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

const useGames = (selectGenre: Genres | null, selectedPlatform : Platform| null) => useData<Game>
('/games',
[selectGenre?.id, selectedPlatform?.id], 
{params:
  {
  genres:selectGenre?.id, platforms:selectedPlatform?.id
}
}
);

export default useGames;