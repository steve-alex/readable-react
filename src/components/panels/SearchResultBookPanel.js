import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import API from "../../adapters/api.js";
import "../../pages/searchPage.scss";

export const SearchResultBookPanel = ({ book }) => {
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
        onClick={() => handleClick()}
      />
      <div className="bookSearchResultContent">
        <h2
          className="text-hoverable searchResultComponent"
          onClick={handleClick}
        >
          <span onClick={() => handleClick()}>{book.title}</span>
        </h2>
        {book.subtitle && (
          <h4 className="searchResultsComponent">{book.subtitle}</h4>
        )}
        {book.authors && (
          <p className="searchResultsComponent">By {book.authors}</p>
        )}
        {book.page_count && (
          <p className="searchResultsComponent">
            Page count: {book.page_count}
          </p>
        )}
        {book.description && <p className="description">{book.description}</p>}
      </div>
      {clicked && <Redirect to={`books/${selectedBookId}`} />}
    </Card.Content>
  );
};

export default SearchResultBookPanel;
