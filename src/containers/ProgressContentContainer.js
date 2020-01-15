import React from "react";
import { Link } from "react-router-dom";
import { DisplayUpdatePercentageBars } from "../components/content/DisplayUpdatePercentageBars";
import "./containers.scss";

export const ProgressContentContainer = ({ progress }) => {
  return (
    <div className="progressContentContainer">
      <div className="progressContent">
        <p>{progress.content}</p>
      </div>
      {progress.updates &&
        progress.updates.map(book => {
          return (
            <div className="bookUpdatePanel" key={book.title}>
              <div className="progressBookImage">
                <Link to={`books/${book.book_id}`}>
                  <img
                    alt={book.title}
                    className="image-hoverable"
                    src={book.image_url}
                  ></img>
                </Link>
              </div>
              <div className="bookUpdateMeta">
                <Link to={`books/${book.book_id}`}>
                  <h2 className="text-hoverable">
                    <span>{book.title}</span>
                  </h2>
                </Link>
                <p>By {book.authors}</p>
                <p>Page Count: {book.page_count}</p>
              </div>
              <div className="bookUpdateBars">
                {book.updates &&
                  book.updates.map(update => {
                    return (
                      <DisplayUpdatePercentageBars
                        key={update.id}
                        update={update}
                        pageCount={parseInt(book.page_count)}
                        timeSinceUpload={update.time_since_upload}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
