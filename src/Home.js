// import React, { useContext } from 'react'
// import { Appcontext, useGlobalContext } from './Context'

import Movies from "./Movies"
import Search from "./Search"

function Home() {
    // const name=useContext(Appcontext)
    return (
        <>
            <Search />
            <Movies />
        </>
    )
}

export default Home