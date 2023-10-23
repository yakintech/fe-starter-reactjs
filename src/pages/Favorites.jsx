import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function Favorites() {

    const { favorites, setfavorites } = useContext(FavoritesContext)



    const removeFav = (id) => {
        let filteredFavorites = favorites.filter(q => q.id != id);

        setfavorites([...filteredFavorites])
    }

    return (<>
        <button onClick={() => setfavorites([])}>Empty</button>
        <h1>Length: {favorites.length}</h1>
        <ul>
            {
                favorites.map(item => {
                    return <li>{item.name} <button onClick={() => removeFav(item.id)}>Remove</button></li>
                })
            }
        </ul>
    </>)
}

export default Favorites