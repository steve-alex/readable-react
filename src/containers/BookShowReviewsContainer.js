import React, { useState, useEffect } from "react";
import { BookShowReviewContainer } from "../containers/BookShowReviewContainer";
import API from "../adapters/api.js";
import '../pages/bookShow.scss'

export const BookShowReviewsContainer = ({ book, userHasReviewed }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (book.followed_users_reviews) {
      getReviews().then(results => setReviews(results));
    }
  }, []);

  async function getReviews() {
    const promises = book.followed_users_reviews.map(review => {
      return API.getReview(review.id);
    });
    const results = await Promise.all(promises);
    return results;
  }

  return (
    <div className="bookShowReviewsContainer">
      {reviews[0] &&
        <h1>Follower's Activity</h1>
      }
      {reviews &&
        reviews.reverse().map(item => {
          return <BookShowReviewContainer review={item.review} />;
        })}
    </div>
  );
};

export default BookShowReviewsContainer;
