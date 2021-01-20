import React from 'react'
import { Recomendadas } from './Recomendadas'
import { SeriesRecomendadas } from './SeriesRecomendadas'

export const SectionRecomendadas = ( ) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500">
            <div className="text-center w-full h-10 pt-10 mb-10" >
                <p className="font-bold text-4xl text-blue text-center"> ¿Qué ver hoy?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Recomendadas />
                <SeriesRecomendadas/>
            
            </div>
        </div>
    )
}
