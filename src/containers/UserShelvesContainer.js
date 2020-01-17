import React from "react";
import { UserShelfDisplayPanel } from "../components/panels/UserShelfDisplayPanel.js";
import "./containers.scss";

export const UserShelvesContainer = ({ shelves }) => {
  return (
    <div className="userShelvesContainer">
      {shelves &&
        Object.keys(shelves).map((shelf, index) => {
          return (
            <UserShelfDisplayPanel
              key={shelf.title}
              shelfName={shelf}
              shelfId={shelves[shelf].shelf_id}
              books={shelves[shelf].books_to_display}
            />
          );
        })}
    </div>
  );
};
