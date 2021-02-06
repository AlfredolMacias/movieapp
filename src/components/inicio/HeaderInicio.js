import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { NavBar } from '../ui/NavBar';

let i = Math.floor(Math.random()*21);
export const HeaderInicio = ( {tipo} ) => {
    const {loading, data} = useFetch(`${tipo}/popular?`);
    const base_url = 'https://image.tmdb.org/t/p/original';
    
    const { results } = !!data && data;
    if(!loading){
        console.log(results);
        if( results[i].overview.length > 300 ){
             results[i].overview = results[i].overview.substring(0,300) + "...";
        }
    }
    
    return (
        <div>
           {
                loading 
                    ?
                    (
                        <div className="flex flex-wrap justify-center content-center text-center transition delay-1000 h-screen w-full">
                             <img src={ process.env.PUBLIC_URL + '/assets/bars-loading.gif' } alt="Cargando" />                
                        </div> 
                    )
                    :
                    (
                        
                        <div className="relative ">
                            <div className="absolute z-20 w-full">
                                <NavBar  />
                            </div>
                            <div className="relative flex w-full grid grid-cols-6 gap-4 z-10 h-screen bg-fixed text-center bg-black mx-auto">
                                <img alt={results[i].title} src={base_url + results[i].backdrop_path} className="h-full w-full object-cover absolute inset-0 z-10 opacity-30"/>
                            
                                {/* <img src={base_url + results[0].poster_path} className="h-48 w-full object-cover md:w-48"/> */}
                                <div className="z-20 col-start-2 col-span-4 text-white absolute inset-x-0 bottom-0 mb-40"> 
                                    <h1 className="font-bold  text-4xl lg:my-10  my-2 uppercase">{results[i].title || results[i].name}</h1>
                                    <p className="text-2x1 my-10">{results[i].overview}</p>
                                    <Link to={(results[i].title)?`./movie/${results[i].id}`:`./tv/${results[i].id}`} >
                                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"> Ver detalles </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )

}