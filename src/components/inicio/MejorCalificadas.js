import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchMejoresPeliculas } from '../../Hooks/useFetchMejoresPeliculas';

const base_url = 'https://image.tmdb.org/t/p/original';
export const MejorCalificadas = ( { tipo } ) => {
    const {loading, data} = useFetchMejoresPeliculas(`${tipo}/top_rated`);
    
    const { results } = !!data && data;
     let movieItem;
     if( !loading ){
        movieItem = results.slice(1,11).map((result, i) => {

            if( result.title && (result.title).length > 30  ){
                console.log(result.title.length)
                result.title = (result.title).substring(0, 30);
            }
            return (
                <>
                <div key = {i}
                    className="md:flex flex  mb-3 md:mx-10 mx-3 my-7 md:max-w-2xl h-24">
                       <img className="h-full inline w-1/4 md:w-1/4   object-cover object-contain" src={(result.poster_path) ? base_url + result.poster_path : process.env.PUBLIC_URL + '/assets/placeholder.jpg' } alt="bag" />
                        <div className="w-2/3  inline  md:w-2/3 px-4 md:py-4 ">
                            <p className="sm:font-bold md:text-lg md:text-2x1  align-middle md:py-1 md:ml-10">{result.title || result.name}</p>
                            {/* <p className="font-bold pt-3  md:pb-1 md:ml-10">Calificación. {result.vote_average}</p>
                            <p className="font-bold md:ml-10">{result.release_date  || result.first_air_date}</p>      */}
                             <p className="font-bold pt-1  md:pb-1 md:ml-10">{result.vote_average}</p>
                            

                        </div>
                        <div className="object-center text-center align-center align-middle">
                            <Link to={ (tipo === 'movie' ) ? `./movie/${result.id}` : `./tv/${result.id}` }>
                                <button className="text-xl aling-middle px-2 mx-2 my-8 text-purple-600 font-semibold rounded-full border border-purple-200 bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">+</button>
                            </Link>
                        </div>
                </div>
                <hr className="bg-gray-100 mx-5 "/>
                </>
            )
        });
     }
    return (
        <div>
            <h1 className="text-center text-2x1 font-bold">{(tipo ==='movie') ? 'Mejores Peliculas' : 'Mejores Series'}</h1>
            {
                loading 
                    ?
                    (
                        <div className="flex flex-wrap justify-center content-center">
                            <img src={ process.env.PUBLIC_URL + '/assets/bars-loading.gif' } alt="Cargando"/>  
                        </div> 
                    )
                    :
                    (
                        <div className="bg-white m-10 py-5 rounded-lg">
                            <div>
                                {movieItem}
                            </div>

                        </div>
                    )
            }
        </div>
    )
}
