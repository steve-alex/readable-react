import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button} from 'semantic-ui-react'
import API from '../adapters/api.js'
import SearchResult from '../components/SearchResult.js'

const SearchResultsContainer = ( {searchResults, shelves, setToRender} ) => {

  return (
    <div className="searchResults">
      {searchResults && 
        searchResults.results.map(book => {
          return <SearchResult
                    key={book.id}
                    book={book}
                    shelves={shelves}
                    setToRender={setToRender}
                  />
        })
      }
    </div>
  )
}

export default SearchResultsContainer;