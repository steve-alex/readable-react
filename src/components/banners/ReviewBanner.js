import React, { useState } from "react";
import { Rating, Card, Image, Button, Modal, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import API from "../../adapters/api.js";
import "../../pages/homePage.scss";

export const ReviewBanner = ({ review, removePostFromTimeline }) => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const user = review.user;

  const handleUserClick = () => {
    history.push(`/users/${user.id}`);
  };

  const handleClose = () => {
    setClicked(false);
  };

  const deleteReview = () => {
    setClicked(false);
    API.deleteReview(review.id).then(
      removePostFromTimeline("review", review.id)
    );
  };

  return (
    <Card.Content>
      <Image
        className="image-hoverable"
        onClick={() => handleUserClick()}
        floated="left"
        size="tiny"
        src={user.avatar}
      />
      <Card.Header>
        <div className="postHeaderMetadata">
          <div className="postHeaderColumn1">
            <div className="postUsername">
              <p className="text-hoverable">
                <span onClick={() => handleUserClick()}>{user.username}</span>{" "}
                rated it
              </p>
            </div>
            <div className="postRating">
              <Rating
                size="huge"
                className="postRatingStars"
                defaultRating={review.rating}
                maxRating={5}
                disabled
              />
            </div>
          </div>
          <div className="postCreatedAt">{review.time_since_upload}</div>
          {review.current_users_post && (
            <Button
              onClick={() => setClicked(true)}
              inverted
              className="deleteButton"
              color="red"
            >
              X
            </Button>
          )}
        </div>
        {clicked && (
          <Modal open={clicked} onClose={e => handleClose(e)}>
            <Modal.Header>Delete this Review?</Modal.Header>
            <Modal.Content>
              <h3>This action cannot be reversed!</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color="green" onClick={() => deleteReview()} inverted>
                <Icon name="checkmark" /> Yes
              </Button>
              <Button color="red" onClick={() => handleClose()} inverted>
                <Icon name="checkmark" /> No
              </Button>
            </Modal.Actions>
          </Modal>
        )}
      </Card.Header>
    </Card.Content>
  );
};
