import React from 'react'
import { useParams } from 'react-router-dom'
import { HeroDetalle } from './HeroDetalle';
import { Similares } from './Similares';

export const DetalleScreen = () => {

    const {movieId} = useParams();
    return (
        <>
            <HeroDetalle id={movieId}/>
            <Similares id={movieId}/>
        </>
    )
}
