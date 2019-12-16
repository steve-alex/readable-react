import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button} from 'semantic-ui-react'
import API from '../adapters/api.js'
import SearchForm from '../forms/SearchForm.js'
import SearchResultsContainer from './SearchResultsContainer.js'
import './containers.css'

const SearchContainer = ( {shelves, logout} ) => {
  const [searchResults, setSearchResults] = useState(undefined)

  return (
      <div>
        <h1>Search</h1>
        <SearchForm
          setSearchResults={setSearchResults}
          />
        <SearchResultsContainer
          searchResults={searchResults}
          shelves={shelves}
        />
      </div>
  )
}

export default SearchContainer;