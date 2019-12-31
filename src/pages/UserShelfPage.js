import React, { useState, useEffect } from 'react'
import API from '../adapters/api.js'
import './pages.scss'

export const UserShelfPage = ( {user, match} ) => {
  const [shelf, setShelf] = useState("")
  
  useEffect(() => {
    API.getShelf(match.params.shelfId)
      .then(res => setShelf(res.shelf))
      .catch(console.log)
  }, [])

  return (
    <div className="userShelfPage">
      <h1 className="shelfHeader">{shelf.name}</h1>
      <div className="shelfBooks">
        {shelf.books && 
          shelf.books.map(book => {
            return(
              <div class="bookOnShelf">
                <img src={book.image_url}></img>
                <h5>{book.title}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}