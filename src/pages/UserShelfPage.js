import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../adapters/api.js";
import "./pages.scss";

export const UserShelfPage = ({ user, match }) => {
  const [shelf, setShelf] = useState("");

  useEffect(() => {
    API.getShelf(match.params.shelfId)
      .then(res => setShelf(res.shelf))
      .catch(console.log);
  }, []);

  return (
    <div className="userShelfPage">
      <h1 className="shelfHeader">{shelf.name}</h1>
      <div className="shelfBooks">
        {shelf.books &&
          shelf.books.map(book => {
            return (
              <div className="bookOnShelf" key={book.title}>
                <Link to={`/books/${book.id}`}>
                  <img
                    className="image-hoverable"
                    src={book.image_url}
                    alt={book.title}
                  ></img>
                </Link>
                <Link to={`/books/${book.id}`}>
                  <h5 className="text-hoverable">
                    <span>{book.title}</span>
                  </h5>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
