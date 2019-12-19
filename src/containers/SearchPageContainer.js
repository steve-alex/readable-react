import React, { useState } from 'react';
import SearchForm from '../forms/SearchForm.js'
import SearchResultsContainer from './SearchResultsContainer.js'
import './containers.css'

const SearchPageContainer = ( {userShelves, logout} ) => {
  const [searchResults, setSearchResults] = useState(undefined)

  return (
    <div>
      <h1>Search</h1>
      <SearchForm
        setSearchResults={setSearchResults}
      />
      <SearchResultsContainer
        searchResults={searchResults}
        userShelves={userShelves}
      />
    </div>
  )
}

export default SearchPageContainer;