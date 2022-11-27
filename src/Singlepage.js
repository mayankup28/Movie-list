import { NavLink, useParams} from 'react-router-dom'
import {API} from './Context'
import { useEffect, useState } from 'react'

function Singlepage() {
    const {id}=useParams();
    const [isloading, setisloading] = useState(true);
    const [movie, Setmovie] = useState('')

    const getMovies = async (url) => {
        setisloading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setisloading(false)
                Setmovie(data)
            } 
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let timerOut=setTimeout(()=>{
            getMovies(`${API}&i=${id}`)
        },1000)
        return ()=>clearTimeout(timerOut)
    }, [id])

    if(isloading){
        return(
            <div className="movie-section">
                <div className="loading">Loading...</div>
            </div>
        )
    }
    return (
        <section className='movie-section'>
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt="" />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className="card-text">{movie.Released}</p>
                    <p className="card-text">{movie.Genre}</p>
                    <p className="card-text">{movie.imdbRating}/10</p>
                    <p className="card-text">{movie.Country}</p>
                    <NavLink to="/" className="back-btn">Go Back</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Singlepage