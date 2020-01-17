import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Image, Button, Modal, Icon } from "semantic-ui-react";
import API from "../../adapters/api.js";
import "../../pages/homePage.scss";

export const ProgressBanner = ({ progress, removePostFromTimeline }) => {
  const [clicked, setClicked] = useState(undefined);
  const history = useHistory();
  const user = progress.user;

  const handleUserClick = () => {
    history.push(`/users/${user.id}`);
  };

  const handleClose = () => {
    setClicked(false);
  };

  const deleteProgress = () => {
    setClicked(false);
    API.deleteProgress(progress.id).then(
      removePostFromTimeline("progress", progress.id)
    );
  };

  return (
    <Card.Content>
      <Image
        className="image-hoverable"
        onClick={() => handleUserClick()}
        floated="left"
        size="tiny"
        src={progress.user.avatar}
      />
      <Card.Header>
        <div className="postHeaderMetadata">
          <div className="postHeaderColumn1">
            <div className="postUsername">
              <p className="text-hoverable">
                <span onClick={e => handleUserClick()}>{user.username}</span>{" "}
                made progress{" "}
              </p>
            </div>
          </div>
          <div className="postCreatedAt">{progress.time_since_upload}</div>
          {progress.current_users_post && (
            <Button
              onClick={() => setClicked(true)}
              inverted
              className="deleteButton"
              color="red"
            >
              X
            </Button>
          )}
          {clicked && (
            <Modal open={clicked} onClose={e => handleClose(e)}>
              <Modal.Header>Delete this Progress?</Modal.Header>
              <Modal.Content>
                <h3>This action cannot be reversed!</h3>
              </Modal.Content>
              <Modal.Actions>
                <Button color="green" onClick={() => deleteProgress()} inverted>
                  <Icon name="checkmark" /> Yes
                </Button>
                <Button color="red" onClick={() => handleClose()} inverted>
                  <Icon name="checkmark" /> No
                </Button>
              </Modal.Actions>
            </Modal>
          )}
        </div>
      </Card.Header>
    </Card.Content>
  );
};
