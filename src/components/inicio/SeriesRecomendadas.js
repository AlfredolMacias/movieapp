import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchSerieRec } from '../../Hooks/useFetchSerieRec';

let randomNum = Math.random() * (1000 - 1) + 1;
randomNum = Math.floor(randomNum);
const base_url = 'https://image.tmdb.org/t/p/original';
const code = '../../../public/code.jpg';

export const SeriesRecomendadas = () => {
    const {loading, data} = useFetchSerieRec(`tv/${randomNum}`);
    
    const {overview, number_of_seasons, name, backdrop_path, id } = !!data && data;
   return (
        <div className="m-auto px-4 py-8 max-w-xl">
            <div className="rounded-b-xl shadow-xl" >
                {
                    loading
                    ?
                    (
                        <div className="flex flex-wrap justify-center content-center">
                            <img src={ process.env.PUBLIC_URL + '/assets/bars-loading.gif' }  alt="Cargando"/>  
                        </div> 
                    
                    )
                    :
                    (
                        <>
                        <div className="">
                            <img className="object-fill w-full h-80 rounded-t-xl" src={ backdrop_path ? base_url + backdrop_path : code } alt={name}/>
                        </div>
                        <div className="px-4 py-1 h-72 bg-gray-100 rounded-b shadow-xl">
                            <h2 className="font-bold text-2xl text-gray-800 my-6 text-center">{name}</h2>
                                <p className="sm:text-sm text-xs text-justify text-gray-700 h-24 px-2 mr-1 my-3 overflow-ellipsis overflow-hidden">
                                    { overview || "No se pudo cargar la información" }
                                </p>
                                <p className="sm:text-sm text-xs text-justify text-gray-700 px-2 mr-1 my-3">
                                    { number_of_seasons + " Temporada(s)" || "No se pudo cargar la información" }
                                </p>
                                <Link to={`./tv/${id}`}>
                                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-xl border border-purple-200 bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Más ...</button>
                                </Link>
                        </div>
                        
                        </>
                    )

                }
            </div>
        </div>
   )
}
