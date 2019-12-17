import React, { useEffect, useState } from 'react';
import { Route, Link, Red, Redirect } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button} from 'semantic-ui-react'
import API from '../adapters/api.js'
import AddToShelfDropDown from '../buttons/AddToShelfDropDown.js'
import AddToShelfForm from '../forms/AddToShelfForm.js'

const SearchResult = ( {book, userShelves, setInstanceToRender} ) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    API.findOrCreateBook(book)
      .then((resp) => setInstanceToRender(resp.book.data.id))
      .then(() => setClicked(true))
  }

  return (
    <div className="searchResult">
      {/* <Link
        key={book.id}
        to={`/books/${book.google_id}`}
        onClick={handleClick}>
      {book.title}
      </Link> */}
      <a onClick={handleClick}>{book.title}</a>
      {clicked && 
        <Redirect to={`/books/${book.google_id}`}/>
      }
      <AddToShelfForm
        book={book}
        userShelves={userShelves}
      />
    </div>
  )
}

export default SearchResult;