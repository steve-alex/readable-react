import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../pages/userProfile.scss";

export const UserShelfPreviewSlide = ({ shelfName, shelf }) => {
  const [redirect, setRedirect] = useState(undefined);
  const [hasBooks, setHasBooks] = useState(undefined);

  useEffect(() => {
    setHasBooks(!!shelf.books_to_display[0]);
  }, []);


  return (
    <>
      {hasBooks && (
        <div className="userShelf">
          <div className="userShelfName">
            <h3 className="text-hoverable">
              <span onClick={() => setRedirect(`/shelves/${shelf.shelf_id}`)}>
                {shelfName}
              </span>
            </h3>
          </div>
          {shelf.books_to_display[0] &&
            shelf.books_to_display.slice(0, 4).map(book => {
              return (
                <div key={book.title} className="userShelfItem">
                  <img src={book.image_url} alt={book.title}></img>
                </div>
              );
            })}

          {redirect && <Redirect to={redirect} />}
        </div>
      )}
    </>
  );
};
