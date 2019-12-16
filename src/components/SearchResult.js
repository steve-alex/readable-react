import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button} from 'semantic-ui-react'
import API from '../adapters/api.js'
import AddToShelfDropDown from '../buttons/AddToShelfDropDown.js'
import AddToShelfForm from '../forms/AddToShelfForm.js'

const SearchResult = ( {book, shelves} ) => {

  return (
    <div className="searchResult">
      <h1>{book.title}</h1>
      <AddToShelfForm book={book} shelves={shelves}/>
    </div>
  )
}

export default SearchResult;