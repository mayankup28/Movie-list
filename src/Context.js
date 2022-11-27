import React, { useContext, useEffect, useState } from "react";
const Appcontext = React.createContext();
export const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const AppProvider = ({ children }) => {
    const [isloading, setisloading] = useState(true);
    const [movie, Setmovie] = useState([])
    const [err, seterr] = useState({ show: "false", msg: "" })
    const [query,Setquery]=useState('Harry Potter')

    const getMovies = async (url) => {
        setisloading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setisloading(false)
                Setmovie(data.Search)
                seterr({
                    show: "false",
                    msg: ""
                })
            } else {
                seterr({
                    show: "true",
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        let timerOut=setTimeout(()=>{
            getMovies(`${API}&s=${query}`)
        },1000)
        return ()=>clearTimeout(timerOut)
    }, [query])

    return <Appcontext.Provider value={{isloading,err,movie,query,Setquery}}>
        {children}
    </Appcontext.Provider>
}


const useGlobalContext = () => {
    return useContext(Appcontext)
}
export { AppProvider, Appcontext, useGlobalContext }