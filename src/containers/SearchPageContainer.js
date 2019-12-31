import React, { useState, useEffect } from 'react';
import SearchForm from '../forms/SearchForm.js'
import SearchResultsContainer from './SearchResultsContainer.js'
import API from '../adapters/api.js'
import './containers.scss'
import UserUpdateForm from '../forms/UserUpdateForm.js'

const SearchPageContainer = ( {logout, userShelves} ) => {
  const [searchType, setSearchType] = useState("title")
  const [searchResults, setSearchResults] = useState(undefined)

  return (
    <div>
      <h1>Search</h1>
      <SearchForm
        searchType={searchType}
        setSearchType={setSearchType}
        setSearchResults={setSearchResults}/>
      <SearchResultsContainer
        searchType={searchType}
        userShelves={userShelves}
        searchResults={searchResults}/>
    </div>
  )
}

export default SearchPageContainer;