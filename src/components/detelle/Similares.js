import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { MovieCard } from './MovieCard';

export const Similares = ( { id } ) => {
    const {loading, data} = useFetch(`movie/${id}/similar?`);
    const { results } = !!data && data; 
    return (
        <>  
            <p className="text-xl font-bold ml-7 mt-10">Peliculas Similares</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    loading
                    ?(
                        <div>Cargando...</div>
                        )
                        :(
                            results.slice(0,4).map( movie => (
                                <MovieCard
                                key={movie.id}
                                { ...movie }
                                />
                                ))
                        )
                }
            </div>
        </>
    )
}
