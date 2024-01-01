import genres from "../data/genres";
import useData from "./useData";

export interface Genres {
 id: number;
 name: string;
 image_background: string;
}

 const useGenres = () => useData<Genres>('/genres');
// for static genres loading 
// const useGenres = () => ({data:genres , isLoading:false,error: null})

export default useGenres