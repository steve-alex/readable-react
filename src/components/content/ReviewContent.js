import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./content.scss";

export const ReviewContent = ({ review }) => {
  const [bookClicked, setBookClicked] = useState(false);

  const handleClick = () => {
    setBookClicked(true);
  };

  return (
    <div className="review-content">
      <div className="review-book">
        <img
          className="image-hoverable"
          onClick={() => handleClick()}
          src={review.book.image_url}
          alt={review.book.title}
        ></img>
      </div>
      <div class="review-book-information">
        <h2 className="text-hoverable" onClick={() => handleClick()}>
          <span>{review.book.title}</span>
        </h2>
        <p>By {review.book.authors}</p>
      </div>
      <div class="review-book-content">
        <p>{review.content}</p>
      </div>
      {bookClicked && <Redirect to={`/books/${review.book.id}`} />}
    </div>
  );
};
