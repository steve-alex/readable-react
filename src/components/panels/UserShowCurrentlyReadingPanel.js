import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "semantic-ui-react";
import "../../pages/homePage.scss";

export const UserShowCurrentlyReadingPanel = ({ currentlyReading }) => {
  const getPageCount = book => {
    if (book.updates[0]) {
      return book.updates[0].page_number
    } else {
      return 0;
    }
  };

  const getTimeSinceUpload = (book) => {
    if (book.updates[0]) {
      return `Last read: ${book.updates[0].time_since_upload}`
    } else {
      return ""
    }
  }

  return (
    <div className="userCurrentlyReading">
      <h1>Currently Reading</h1>
      {currentlyReading &&
        currentlyReading.map(book => {
          return (
            <div key={book.title} className="currentlyReadingBook">
              <div className="currentlyReadingBookImage">
                <Link to={`/books/${book.book_id}`}>
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="image-hoverable"
                  ></img>
                </Link>
              </div>
              <div className="currentlyReadingBookMeta">
                <Link to={`/books/${book.book_id}`}>
                  <h3 className="text-hoverable">
                    <span>{book.title}</span>
                  </h3>
                </Link>
                <h4>By {book.authors}</h4>
                <Progress
                  indicating
                  progress="value"
                  value={getPageCount(book)}
                  total={book.page_count}
                />
                <p className="pageCount">Total Pages: {book.page_count}</p>
                <p>{getTimeSinceUpload(book)}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
