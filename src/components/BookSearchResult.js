import React from "react";
import { SearchResultBookPanel } from "../components/panels/SearchResultBookPanel.js";
import { AddBookToShelfForm } from "../forms/AddBookToShelfForm.js";
import { Card } from "semantic-ui-react";

export const BookSearchResult = ( {book, userShelves} ) => {
  return (
    <Card fluid color="teal">
      <SearchResultBookPanel book={book} />
      <AddBookToShelfForm book={book} userShelves={userShelves} />
    </Card>
  );
};
