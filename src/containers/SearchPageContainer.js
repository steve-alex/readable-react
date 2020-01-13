import React, { useState } from "react";
import { SearchForm } from "../forms/SearchForm.js";
import { SearchResultsContainer } from "./SearchResultsContainer.js";
import "./containers.scss";

export const SearchPageContainer = ({ userShelves }) => {
  const [searchType, setSearchType] = useState("title");
  const [searchResults, setSearchResults] = useState(undefined);

  return (
    <div>
      <h1>Search</h1>
      <SearchForm
        searchType={searchType}
        setSearchType={setSearchType}
        setSearchResults={setSearchResults}
      />
      <SearchResultsContainer
        searchType={searchType}
        userShelves={userShelves}
        searchResults={searchResults}
      />
    </div>
  );
};
