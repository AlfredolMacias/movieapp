import React from 'react'
import { Link } from 'react-router-dom';

export const MovieCard = ({
    title,
    backdrop_path,
    overview,
    id,
    name
}) => {
    const base_url = 'https://image.tmdb.org/t/p/original';

    return (
        <div className="card h-full mx-5 max-w-xl my-7">
            <img className="rounded-t" src={base_url + backdrop_path} alt={title || name}/>
            <div className=" relative bg-gray-100 h-72 rounded-b p-5">
                <div>
                    <p className="text-2x1 font-bold">{title || name}</p>
                    <p className="my-2 text-justify ">{ overview.slice(0,280) + ' ...'}</p>
                </div>
                <div className="absolute bottom-3 left-3">
                    <Link to={`./${id}`}>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-xl border border-purple-200 bg-white hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Más ...</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
