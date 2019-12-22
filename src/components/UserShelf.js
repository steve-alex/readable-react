import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const UserShelf = ( {shelfName, shelf} ) => {
  const [redirect, setRedirect] = useState(undefined)

  const renderImages = () => {
    return shelf.books_to_display.map(book => {
      return (
        <img
          onClick={() => setRedirect(`/books/${book.book_id}`)}
          src={book.image_url}></img>
      )
    })
  }

  return (
    <div>
      {renderImages()}
      <div onClick={() => setRedirect(`/shelves/${shelf.shelf_id}`)}>
        <h3>{shelfName}</h3>
        <h5>Books: {shelf.book_count}</h5>
      </div>
      <br></br>
      {redirect &&
        <Redirect to={redirect}/>
      }
    </div>
  )
}

export default UserShelf;