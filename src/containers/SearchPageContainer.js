import React, { useState, useEffect } from 'react';
import SearchForm from '../forms/SearchForm.js'
import SearchResultsContainer from './SearchResultsContainer.js'
import API from '../adapters/api.js'
import './containers.scss'
import UserUpdateForm from '../forms/UserUpdateForm.js'

const SearchPageContainer = ( {logout, userShelves} ) => {
  const [searchResults, setSearchResults] = useState(undefined)
  const [searchType, setSearchType] = useState(undefined)
  return (
    <div>
      <h1>Search</h1>
      <SearchForm
        setSearchResults={setSearchResults}
      />
      <SearchResultsContainer
        userShelves={userShelves}
        searchResults={searchResults}
      />
    </div>
  )
}

export default SearchPageContainer;