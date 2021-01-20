import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';
export const NavBar = () => {
    return (
        <div className="flex h-10 bg-gray-700 justify-center flex-wrap content-center z-50 py-50 ">
            <NavLink exact to="/" className="text-white text-xl mx-12">Peliculas</NavLink>
            <NavLink exact to="/series" className="text-white text-xl mx-12">Series</NavLink>
            {/* <NavLink exact to="/series" className="text-white text-xl mx-12">About</NavLink>
            <NavLink exact to="/series" className="text-white text-xl mx-12">Buscar</NavLink> */}
            {/* <NavLink exact to="/actors" className="text-white">Actrices & Actores</NavLink>
            <NavLink exact to="/buscar" className="text-white">Buscar</NavLink> */}
        </div>
    )
}