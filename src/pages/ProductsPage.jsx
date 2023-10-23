import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function ProductsPage() {

  const [products, setProducts] = useState([])

  const { favorites, setfavorites } = useContext(FavoritesContext)

  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setProducts(res.data)
      })

  }, [])


  const addToFav = (item) => {

    //eğer o ürün favoride varsa ekleme

    var favControl = favorites.find(q => q.id == item.id)

    if (!favControl)
      setfavorites([...favorites, item])
  }


  return (<>
    <ul>
      {
        products.map(item => {
          return <li key={item.id}>
            {item.name} <button onClick={() => addToFav(item)}>Add To Fav</button>
          </li>
        })
      }
    </ul>
  </>
  )
}

export default ProductsPage