import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import API from '../adapters/api.js'
import './pages.scss'

export const UserShelfPage = ( {user, match} ) => {
  const [shelf, setShelf] = useState("")
  const [clickedId, setClickedId] = useState(false)
  
  useEffect(() => {
    API.getShelf(match.params.shelfId)
      .then(res => setShelf(res.shelf))
      .catch(console.log)
  }, [])

  const handleClick = (bookId) => {
    setClickedId(bookId)
  }

  return (
    <div className="userShelfPage">
      <h1 className="shelfHeader">{shelf.name}</h1>
      <div className="shelfBooks">
        {shelf.books && 
          shelf.books.map(book => {
            return(
              <div class="bookOnShelf">
                <img
                  onClick={() => handleClick(book.id)}
                  className="image-hoverable" src={book.image_url}></img>
                <h5
                  className="text-hoverable"
                  onClick={(e) => handleClick(book.id)}>
                  <span>{book.title}</span></h5>
                  {clickedId && 
                    <Redirect to={`books/${clickedId}`} />}

              </div>
            )
          })
        }
      </div>
    </div>
  )
}