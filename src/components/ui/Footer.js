import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-black w-full py-5 justify-evenly text-white text-center">
           <p>
                Sitio creado por Alfredo Macías como un proyecto personal sin fines de lucro para ser parte del portafolio.
            </p>
            <p>
                  Información obtenida de:
                  <a href="https://themoviedb.org" rel="noreferrer" target="_blank" className="text-blue">
                    <img
                        className="mx-72" 
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TheMoviedb.org" />
                </a> 
            </p>
            <p>
               Copyright © 2021
            </p>
        </div>
    )
}
