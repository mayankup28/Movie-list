import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'

function Movies() {
    const { movie,isloading } = useGlobalContext();

    if(isloading){
        return(
            <div className="movie-section">
                <div className="loading">Loading...</div>
            </div>
        )
    }
    return (
        <>
            <section className='movie-page'>
                <div className='container grid grid-4-col'>
                    {movie.map((ele) => {
                        const { Title, imdbID, Poster } = ele;
                        const MovieStr = Title.substring(0, 12)

                        return <NavLink to={`movie/${imdbID}`} key={imdbID}>
                            <div className="card">
                                <div className="card-info">
                                    <h2>{MovieStr.length >= 12 ? `${MovieStr}...` : MovieStr}</h2>
                                    <img src={Poster} alt={imdbID} />
                                </div>
                            </div>
                        </NavLink>
                    })}
                </div>
            </section>
        </>
    )
}

export default Movies