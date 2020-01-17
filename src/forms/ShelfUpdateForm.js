import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import API from "../adapters/api";

export const ShelfUpdateForm = ({ user, match }) => {
  const [shelves, setShelves] = useState(undefined);
  const [shelfName, setShelfName] = useState(undefined);

  useEffect(() => {
    setShelves(user.shelves);
  }, []);

  const handleSubmit = () => {
    API.createShelf(shelfName, user.id)
      .then(res => setShelves([...shelves, res.shelf]))
      .catch(console.log);
  };

  const deleteShelf = (e, shelfId) => {
    e.preventDefault();
    API.deleteShelf(shelfId)
      .then(setShelves(shelves.filter(shelf => shelf.id !== shelfId)))
      .catch(console.log);
  };

  return (
    <div className="shelfUpdateFormContainer">
      <div className="shelvesToUpdate">
        {shelves &&
          shelves.map(shelf => {
            return (
              <div className="shelfInstance">
                <h3>{shelf.name}</h3>
                <Button color="orange" inverted onClick={e => deleteShelf(e, shelf.id)}>Delete</Button>
              </div>
            );
          })}
      </div>
      <div className="newShelfForm">
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input
              value={shelfName}
              onChange={e => setShelfName(e.target.value)}
              placeholder="Shelf name"
            />
          </Form.Field>
          <Button inverted color="olive" type="submit">Create New Shelf</Button>
        </Form>
      </div>
    </div>
  );
};
