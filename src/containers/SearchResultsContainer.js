import React, { } from 'react';
import SearchResult from '../components/SearchResult.js'

const SearchResultsContainer = ( {searchResults, userShelves} ) => {

  return (
    <div className="searchResults">
      {searchResults && 
        searchResults.results.map(book => {
          return (
            <SearchResult
              key={book.id}
              book={book}
              userShelves={userShelves}
            />
          )
        })
      }
    </div>
  )
}

export default SearchResultsContainer;