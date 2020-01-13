/* eslint-disable react/prop-types */
import { Rating } from "semantic-ui-react";

const FriendActivity = ({ followedUsersReviews }) => {
  return (
    <div>
      {followedUsersReviews &&
        followedUsersReviews.map(review => {
          return (
            <div>
              <p>{review.content}</p>
              <p>{review.created_at.slice(0, 10)}</p>
              <Rating
                icon="star"
                defaultRating={review.rating}
                maxRating={5}
                disabled
              />
            </div>
          );
        })}
    </div>
  );
};

export default FriendActivity;
