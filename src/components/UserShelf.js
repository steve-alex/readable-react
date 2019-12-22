import React, { useEffect, useState } from 'react'

const UserShelf = ( {shelfName, shelf} ) => {

  const renderImages = () => {
    return shelf.books_to_display.map(book => {
      return <img src={book.image_url}></img>
    })
  }

  return (
    
    <div>
      <h3>{shelfName}</h3>
      {renderImages()}
      <h5>Books: {shelf.book_count}</h5>
      <br></br>
    </div>
  )
}

export default UserShelf;