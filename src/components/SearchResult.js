import React, { useEffect, useState } from 'react';
import { Route, Link, Red, Redirect } from "react-router-dom"
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js'
import SearchResultBookPanel from '../panels/SearchResultBookPanel.js'

const SearchResult = ( {book, userShelves, instanceToRender, setInstanceToRender} ) => {

  return (
    <div className="searchResult">
      <SearchResultBookPanel
        book={book}
        instanceToRender={instanceToRender}
        setInstanceToRender={setInstanceToRender}
      />
      <AddBookToShelfForm
        book={book}
        userShelves={userShelves}
      />
    </div>
  )
}

export default SearchResult;