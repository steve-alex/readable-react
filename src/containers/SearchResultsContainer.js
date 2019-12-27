import React, { } from 'react';
import SearchResult from '../components/SearchResult.js'
import { Card } from 'semantic-ui-react'

const SearchResultsContainer = ( {searchResults, userShelves} ) => {

  return (
      <Card.Group>
      {searchResults && 
        searchResults.results.map(book => {
          return (
            <SearchResult
              key={book.google_id}
              book={book}
              userShelves={userShelves}
            />
          )
        })
      }
      </Card.Group>
  )
}

export default SearchResultsContainer;