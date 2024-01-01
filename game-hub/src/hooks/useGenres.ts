import useData from "./useData";
import genres from "../data/genres";

export interface Genres {
 id: number;
 name: string;
 image_background: string;
}

// const useGenres = () => useData<Genres>('/genres');
// for static genres loading 
const useGenres = () => ({data:genres , isLoading:false,error: null})

export default useGenres