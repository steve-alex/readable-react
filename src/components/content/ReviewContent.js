import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./content.scss";

export const ReviewContent = ({ review }) => {

  return (
    <div className="review-content">
      <div className="review-book">
        <Link to={`books/${review.book.id}`}>
          <img
            className="image-hoverable"
            src={review.book.image_url}
            alt={review.book.title}
          ></img>
        </Link>

      </div>
      <div className="review-book-information">
        <Link to={`books/${review.book.id}`}>
          <h2 className="text-hoverable">
            <span>{review.book.title}</span>
          </h2>
        </Link>
        <p>By {review.book.authors}</p>
      </div>
      <div className="review-book-content">
        <p>{review.content}</p>
      </div>
    </div>
  );
};
