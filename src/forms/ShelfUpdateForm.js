import React, { useState, useEffect } from "react";
import { Form, Input, Button, Modal, Header, Icon } from "semantic-ui-react";
import API from "../adapters/api";

export const ShelfUpdateForm = ({ user, match }) => {
  const [shelves, setShelves] = useState(undefined);
  const [shelfName, setShelfName] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setShelves(user.shelves);
  }, []);

  const handleSubmit = () => {
    API.createShelf(shelfName, user.id)
      .then(res => setShelves([...shelves, res.shelf]))
      .catch(() => setModalOpen(true))
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
              <div className="shelfInstance" key={shelf.name}>
                <h3>{shelf.name}</h3>
                <Button
                  color="orange"
                  inverted
                  onClick={e => deleteShelf(e, shelf.id)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
      </div>
      <Form onSubmit={handleSubmit} className="newShelfForm">
        <Form.Field>
          <Input
            className="newShelfInput"
            value={shelfName}
            onChange={e => setShelfName(e.target.value)}
            placeholder="Shelf name"
          />
        </Form.Field>
        <div className="newShelfSubmit">
          <Modal
            centered={false}
            trigger={
              <Button inverted color="olive" type="submit">
                Create New Shelf
              </Button>
            }
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            size="small"
          >
            <Header />
            <Modal.Content>
              <h3>Shelf names must be unique!</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color="green"
                onClick={() => setModalOpen(false)}
                inverted
              >
                <Icon name="checkmark" /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </Form>
    </div>
  );
};
