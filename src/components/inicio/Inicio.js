import React from 'react';
import { HeaderInicio } from './HeaderInicio';
import { Listado } from './Listado';
import { SectionRecomendadas } from './SectionRecomendadas';


export const Inicio = () => {
    const tipo = "movie";
    console.log(tipo);
    return (
        <div>
            <HeaderInicio tipo = {tipo}/>
            <SectionRecomendadas tipo = {tipo} />
            <Listado tipo = {tipo} />
            
        </div>
    )
}
