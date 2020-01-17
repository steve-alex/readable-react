import React from "react";
import { BookSearchResult } from "../components/panels/BookSearchResult.js";
import { UserSearchResult } from "../components/panels/UserSearchResult.js";
import { Card } from "semantic-ui-react";
import '../pages/searchPage.scss'

export const SearchResultsContainer = ( {searchType, searchResults, userShelves} ) => {
  return (
    <Card.Group>
      {searchResults &&
        searchResults.results.map(result => {
          if (searchType === "user") {
            return <UserSearchResult user={result} />;
          } else {
            return (
              <BookSearchResult
                key={result.google_id}
                book={result}
                userShelves={userShelves}
              />
            );
          }
        })}
    </Card.Group>
  );
};