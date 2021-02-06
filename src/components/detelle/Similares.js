import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { MovieCard } from './MovieCard';

export const Similares = ( { id } ) => {
    let route = window.location.href;
    route = route.split('/');
    const {loading, data} = useFetch(`${route[3]}/${id}/similar?`);
    const { results } = !!data && data; 
    return (
        <>  
            <p className="text-xl font-bold ml-7 mt-10">{(route[3] ==='movie') ? 'Peliculas Similares' : 'Series Similares'}</p>
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
