import React, { useState } from "react";
import { Form, Button, TextArea, Rating, Modal } from "semantic-ui-react";
import API from "../adapters/api.js";
import "../forms/forms.scss";

export const NewReviewForm = ( {bookId, userId, setUserHasReviewed, handleUpdate} ) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    API.createReview(content, rating, bookId, userId)
      .then(setUserHasReviewed(true))
      .then(() => handleUpdate())
      .catch(console.log);
    //Something here to make sure the review has gone through
  };

  const handleClick = e => {
    e.preventDefault();
    setRating(parseInt(e.target.getAttribute("aria-posinset")));
  };

  return (
    <div className="newReviewForm">
      <Modal
        trigger={<Button color="teal">Write a Review</Button>}
        centred={false}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Field className="textareaField">
            <TextArea
              className="textarea"
              placeholder="What do you think?"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="ratingField">
            <Rating
              icon="star"
              defaultRating={0}
              maxRating={5}
              value={rating}
              onClick={e => handleClick(e)}
            />
          </Form.Field>
          <Button className="newReviewButton" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
