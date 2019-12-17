import React, { useEffect, useState } from 'react';
import { Route, Link, Red, Redirect } from "react-router-dom"
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js'

const SearchResult = ( {book, userShelves, setInstanceToRender} ) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    API.findOrCreateBook(book)
      .then((resp) => setInstanceToRender(resp.book.id))
      .then(() => setClicked(true))
  }

  return (
    <div className="searchResult">
      <a onClick={handleClick}>{book.title}</a>
      {clicked && 
        <Redirect to={`/books/${book.google_id}`}/>
      }
      <AddBookToShelfForm
        book={book}
        userShelves={userShelves}
      />
    </div>
  )
}

export default SearchResult;