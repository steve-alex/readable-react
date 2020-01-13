import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import API from "../../adapters/api.js";
import "./panels.scss";

export const SearchResultBookPanel = ( {book, instanceToRender, setInstanceToRender} ) => {
  const [clicked, setClicked] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(undefined);

  const handleClick = () => {
    API.findOrCreateBook(book)
      .then(resp => setSelectedBookId(resp.book.id))
      .then(() => setClicked(true));
  };

  return (
    <Card.Content>
      <Image
        floated="left"
        size="small"
        src={book.image_url}
        className="image-hoverable"
      />
      {clicked && <Redirect to={`/books/${selectedBookId}`} />}
      <Card.Header>
        <h2
          className="text-hoverable searchResultComponent"
          onClick={handleClick}
        >
          <span>{book.title}</span>
        </h2>
      </Card.Header>
      <Card.Header>
        {book.subtitle && (
          <p className="searchResultsComponent">{book.subtitle}</p>
        )}
      </Card.Header>
      <Card.Meta>
        {book.authors && (
          <p className="searchResultsComponent">By {book.authors}</p>
        )}
        {book.page_count && (
          <p className="searchResultsComponent">
            Page count: {book.page_count}
          </p>
        )}
      </Card.Meta>
      <Card.Content>
        {book.description && <p className="description">{book.description}</p>}
      </Card.Content>
    </Card.Content>
  );
};

export default SearchResultBookPanel;
