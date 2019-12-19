import React, { useEffect, useState } from 'react';
import { Route, Link, Red, Redirect } from "react-router-dom"
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js'
import SearchResultBookPanel from '../panels/SearchResultBookPanel.js'

const SearchResult = ( {book, userShelves} ) => {

  return (
    <div className="searchResult">
      <SearchResultBookPanel
        book={book}
      />
      <AddBookToShelfForm
        book={book}
        userShelves={userShelves}
      />
    </div>
  )
}

export default SearchResult;