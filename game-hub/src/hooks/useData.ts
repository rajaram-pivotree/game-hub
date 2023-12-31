import React, { useEffect, useState } from 'react'
import { Game } from './useGames';
import apiClient from '../services/api-client';
import { AxiosAdapter, AxiosRequestConfig, CanceledError } from 'axios';


interface Genres {
 id: number;
 name: string;
}

interface FetchResponse<T>{
    count: number;
    results: T[]
} 

const useData = <T>(endpoint: string, deps?:any[], requestConfig? : AxiosRequestConfig) => {
 
    const [data, setData] = useState<T[]>([]);
    const [error, SetError] = useState('');
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal,...requestConfig})
        .then((res) => {setData(res.data.results)
        setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            SetError(
            err.message
        )
        setLoading(false)});


    return () => controller.abort();
    },deps?  [...deps]:[]);
  
    return {data , error, isLoading};
}

export default useData;