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
      <div className="newShelfForm">
        <h1>Create a new shelf</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Input
              value={shelfName}
              onChange={e => setShelfName(e.target.value)}
              placeholder="Shelf name"
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      <div className="shelvesToUpdate">
        {shelves &&
          shelves.map(shelf => {
            return (
              <div class="shelfInstance">
                <h1>{shelf.name}</h1>
                <Button onClick={e => deleteShelf(e, shelf.id)}>Remove</Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
