import React from 'react'

export const Footer = () => {
    return (
        <div className="bg-black w-full py-5 justify-evenly content-center text-white text-center">
           <p>
                Sitio creado por Alfredo Macías como un proyecto personal sin fines de lucro para ser parte del portafolio.
            </p>
            <p>
                  Información obtenida de:
                  <a href="https://themoviedb.org" rel="noreferrer" target="_blank"className="text-blue">
                      <img
                        className="w-1/3  " 
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TheMoviedb.org" />
                </a> 
            </p>
            <p>
               Copyright © 2021
            </p>
        </div>
    )
}
