import React from 'react'
import { useFetch } from '../../Hooks/useFetch';

export const HeroDetalle = ( {id} ) => {
    let route = window.location.href;
    route = route.split('/');
    const {loading, data} = useFetch(`${route[3]}/${id}?`);
    const base_url = 'https://image.tmdb.org/t/p/original';
  
    const { title, overview, backdrop_path, tagline, poster_path, original_title,release_date, name} = !!data && data;
    

    return (
        <div className="h-screen flex text-center">
            {
                loading
                ?
                    <div className="text-center" >Cargando...</div>
                :
                <div className="relative flex w-full   grid  h-full md:h-screen bg-fixed text-center bg-black  items-center">
                    <img alt={title} src={base_url + backdrop_path} className="h-full w-full object-cover absolute inset-0 z-10 opacity-20"/>
                
                    {/* <img src={base_url + results[0].poster_path} className="h-48 w-full object-cover md:w-48"/> */}
                    <div className="z-20 text-white absolute md:flex ">
                        <div className="grid grid-cols-1 md:grid-cols-5 w-full items-center">
                            {/* <div className="col-start-2 col-span-4"> */}
                                <div className=" col-1 md:col-start-2 "  >
                                    <img className="md:h-96 h-1/2 sm:h-1/4 sm:w-1/3  w-1/2 mx-auto md:mx-0  md:w-full" src = { base_url + poster_path } alt={title}/>
                                </div>
                                <div className=" col-1 md:col-start-3 md:col-span-3 mx-16 text-center">
                                    <h1 className="font-bold  text-4xl mb-5 uppercase">{ title || name }</h1>
                                    <p className="font-bold text-3x1 mb-5">{tagline}</p>
                                    <p className="text-justify mb-5">{overview}</p>
                                    <p className="mb-5">Titulo original: {original_title}</p>
                                    <p>Fecha de Lanzamiento: {release_date}</p>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
