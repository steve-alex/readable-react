import React, { useState } from "react";
import { SearchForm } from "../forms/SearchForm.js";
import { SearchResultsContainer } from "./SearchResultsContainer.js";
import "./containers.scss";

export const SearchPageContainer = ({ userShelves }) => {
  const [searchType, setSearchType] = useState("title");
  const [searchResults, setSearchResults] = useState(undefined);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (searchType === "user") {
  //     API.findUsers(searchTerm)
  //       .then(searchResults => setSearchResults(searchResults))
  //       .then(() => setSearchTerm(""));
  //   } else {
  //     API.search(searchTerm, searchType)
  //       .then(searchResults => setSearchResults(searchResults))
  //       .then(() => setSearchTerm(""));
  //   }
  // };

  const handleSearchTypeChange = (newSearchType) => {
    if (newSearchType === "user" && searchType !== "user ") {
      setSearchResults(undefined)
      setSearchType("user")
    } else if (newSearchType !== "user" && searchType === "user") {
      setSearchResults(undefined)
    }
    setSearchType(newSearchType)
  }

  return (
    <div>
      <h1>Search</h1>
      <SearchForm
        searchType={searchType}
        handleSearchTypeChange={handleSearchTypeChange}
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
