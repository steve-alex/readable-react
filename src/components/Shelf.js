import React, { useState, useEffect } from 'react'
import API from '../adapters/api.js'

const Shelf = ( {user, match} ) => {
  const [shelf, setShelf] = useState("")
  
  useEffect(() => {
    API.getShelf(match.params.shelfId)
      .then(res => setShelf(res.shelf))
      .catch(console.log)
  }, [])

  const renderBooks = () => {
    return shelf.books.map(book => {
      return(
        <>
          <img src={book.image_url}></img>
          <h5>{book.title}</h5>
        </>
      )
    })
  }

  return (
    <div>
      <h1>{shelf.name}</h1>
      {shelf.books && 
        renderBooks()
      }
    </div>
  )
}

export default Shelf;