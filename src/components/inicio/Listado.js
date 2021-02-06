import React from 'react'
import { MasTaquilleras } from './MasTaquilleras';
import { MejorCalificadas } from './MejorCalificadas';

export const Listado = ( { tipo }) => {
    return (
        <div className="py-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  ">
            <div className="text-center w-full h-10 mt-10 mb-5 " >
                <p className="font-bold text-4xl text-gray text-center">{(tipo ==='movie') ? 'Listado de Peliculas' : 'Listado de Series'}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <MejorCalificadas tipo = { tipo } />
                <MasTaquilleras tipo = { tipo }/>
            
            </div>
        </div>
    )
}
