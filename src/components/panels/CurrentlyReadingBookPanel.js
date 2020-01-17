import React, { useState, useEffect } from "react";
import { Progress, Button } from "semantic-ui-react";
import { UpdateReadingProgressForm } from "../../forms/UpdateReadingProgressForm";
import { Redirect } from "react-router-dom";
import "./panels.scss";

export const CurrentlyReadingBookPanel = ({
  book,
  setPageToUpdate,
  createUpdate
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setClicked(true);
  };

  if (book) {
    return (
      <div className="currentlyReadingPanel">
        <div className="currentlyReadingBookTitle">
          <h3 className="text-hoverable" onClick={e => handleClick(e)}>
            {book.title}
          </h3>
        </div>
        <div className="currentlyReadingBookContent">
          <h5>By {book.authors}</h5>
          <img
            src={book.image_url}
            alt={book.title}
            className="image-hoverable"
            onClick={e => handleClick(e)}
          ></img>
        </div>

        <div className="currentlyReadingProgress">
          <h5 className="totalPages">Total pages: {book.page_count}</h5>

          <UpdateReadingProgressForm
            pageCount={book.page_count}
            book={book}
            setPageToUpdate={setPageToUpdate}
            createUpdate={createUpdate}
          />
          {book.updates[0] && (
            <p className="lastRead">
              Last read: {book.updates[0].time_since_upload}
            </p>
          )}
        </div>
        {clicked && <Redirect to={`books/${book.book_id}`} />}
      </div>
    );
  } else {
    return <></>;
  }
};
