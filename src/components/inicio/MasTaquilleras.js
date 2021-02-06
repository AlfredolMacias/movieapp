import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchSerieRec } from '../../Hooks/useFetchSerieRec';
// import { useFetch } from '../../Hooks/useFetch';
const base_url = 'https://image.tmdb.org/t/p/original';

export const MasTaquilleras = ( { tipo } ) => {
    // const {loading, data} = useFetch(`discover/${tipo}?sort_by=revenue.desc&`);
    const { loading, data } = useFetchSerieRec( tipo );
    
    const { results } = !!data && data;
     let movieItem;
     if( !loading ){
        movieItem = results.slice(1,11).map((result, i) => {
            if( result.title && (result.title).length > 35){
                result.title = (result.title).substring(0, 35);
            }
            return (
                // <div key = {i}
                // className="md:flex flex shadow-lg my-5 mx-10 md:max-w-2xl h-48">
                // <img className="h-full inline w-1/2 md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6 object-contain" src={base_url + result.poster_path} alt={result.poster_path} />
                //     <div className="w-1/2  inline  md:w-2/3 px-4 py-4 bg-white rounded-lg rounded-l-none">        
                //         <p className="font-bold text-lg md:text-2x1  align-middle md:py-3 md:ml-10">{result.title || result.name}</p>
                //         <p className="font-bold md:ml-10">{result.release_date || result.first_air_date}</p>     
                //         <Link to={`./movie/${result.id}`}>
                //             <button className="px-4 py-1 text-sm text-purple-600 md:ml-10 my-3 font-semibold rounded-xl border border-purple-200 bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Más ...</button>
                //         </Link>
                //     </div>
                // </div>

                <>
                <div key = {i}
                    className="md:flex flex  mb-3 md:mx-10 mx-3 my-7 md:max-w-2xl h-24">
                       <img className="h-full inline w-1/4 md:w-1/4   object-cover object-contain" src={(result.poster_path) ? base_url + result.poster_path : process.env.PUBLIC_URL + '/assets/placeholder.jpg' } alt={ result.title || result.name}/>
                        <div className="w-2/3  inline  md:w-2/3 px-4 md:py-4 ">
                            <p className="sm:font-bold md:text-lg md:text-2x1  align-middle md:py-1 md:ml-10">{result.title || result.name}</p>
                            {/* <p className="font-bold pt-3  md:pb-1 md:ml-10">Calificación. {result.vote_average}</p>
                            <p className="font-bold md:ml-10">{result.release_date  || result.first_air_date}</p>      */}
                             <p className="font-bold pt-1  md:pb-1 md:ml-10">{result.vote_average}</p>
                            

                        </div>
                        <div className="object-center text-center align-center align-middle">
                            <Link to={ (tipo === 'movie' ) ? `./movie/${result.id}` : `./tv/${result.id}`}>
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
            <h1 className="text-center text-2x1 font-bold">{(tipo ==='movie') ? 'Más taquilleras' : 'Más populares'}</h1>
            {
                loading 
                    ?
                    (
                        <div className="flex flex-wrap justify-center content-center">
                            <img src={ process.env.PUBLIC_URL + '/assets/bars-loading.gif' } alt="Cargando" />  
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
