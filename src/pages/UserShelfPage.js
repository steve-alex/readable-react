import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DeleteShelfBookButton } from '../components/buttons/DeleteShelfBookButton.js'
import API from "../adapters/api.js";
import "./shelfPage.scss";

export const UserShelfPage = ({ user, match }) => {
  const [shelf, setShelf] = useState("");
  const [shelfOwner, setShelfOwner] = useState(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    API.getShelf(match.params.shelfId)
      .then(res => {
        setShelf(res.shelf);
        setShelfOwner(res.shelf.user.id);
      })
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
                <div className="bookOnShelfImage">
                  <Link to={`/books/${book.id}`}>
                    <img
                      className="image-hoverable"
                      src={book.image_url}
                      alt={book.title}
                    ></img>
                  </Link>
                </div>
                  {editMode && 
                    <DeleteShelfBookButton shelfCopyId={book.shelf_copy_id}/>
                  }
              </div>
            );
          })}
      </div>
      <div className="editShelf">
        {user.id === shelfOwner && (
          <Button
            inverted
            onClick={() => setEditMode(!editMode)}
            color={editMode ? "orange" : "green"}
          >
            {editMode ? "Finish Editing" : "Edit Shelf"}
          </Button>
        )}
      </div>
    </div>
  );
};
