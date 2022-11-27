import React from 'react'
import { useGlobalContext } from './Context'

function Search() {
    const {query,Setquery,err}=useGlobalContext()
    return (
    <> 
    <section className="search-section">
        <h2>Search Your Movie</h2>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
            <div>
                <input type="text" placeholder='Search Here' value={query} onChange={(e)=>Setquery(e.target.value)} />
            </div>
        </form>
        <div className='card-error'>
            <p>{err.show&&err.msg}</p>
        </div>
    </section>
    </>)
}

export default Search