import React, { } from 'react';
import SearchResult from '../components/SearchResult.js'

const SearchResultsContainer = ( {searchResults, userShelves, instanceToRender, setInstanceToRender} ) => {

  return (
    <div className="searchResults">
      {searchResults && 
        searchResults.results.map(book => {
          return <SearchResult
                    key={book.id}
                    book={book}
                    userShelves={userShelves}
                    instanceToRender={instanceToRender}
                    setInstanceToRender={setInstanceToRender}
                 />
        })
      }
    </div>
  )
}

export default SearchResultsContainer;