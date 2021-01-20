import { useEffect, useRef, useState } from 'react'

export const useFetchMejoresPeliculas = ( url ) => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = '?api_key=3f565a6bf0f27ce7c6671cbb814d5b52';
    const language = 'es-Mx'
    const urlPeticion = `${baseUrl}${url}${apiKey}&language=${language}`;
    const isMounted = useRef( true );
    
    const [mRecState, setMRecState] = useState( { data: null, loading: true, error:null } );

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect( () => {
        setMRecState({ data: null, loading: true, error: null});
        
        fetch( urlPeticion )
            .then( resp => resp.json())
            .then( data => {
                if( isMounted.current ){
                    setMRecState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })
            .catch( () => {
                setMRecState({
                    data: null,
                    loading: true,
                    error: 'No se pudo cargar la info'
                })
            })
    }, [urlPeticion]);
    return mRecState; 
}
