import React, { useEffect, useState } from 'react'
import { Game } from './useGames';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


interface Genres {
 id: number;
 name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genres[]
}

const useGenres = () => {
 
    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, SetError] = useState('');
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    apiClient
        .get<FetchGenresResponse>('/genres',{signal: controller.signal})
        .then((res) => {setGenres(res.data.results)
        setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            SetError(
            err.message
        )
        setLoading(false)});


    return () => controller.abort();
    }, []);
  
    return {genres , error, isLoading};
}

export default useGenres