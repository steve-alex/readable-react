import React, { useState } from "react";
import { Rating, Card, Image } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";
import { parseDate } from "../../hooks/datetime.js";
import "./banners.scss";

export const ReviewBanner = ({ review }) => {
  const [userClicked, setUserClicked] = useState(false);
  const history = useHistory();
  const user = review.user;

  const handleUserClick = () => {
    setUserClicked(true);
    console.log(user.id);
    // history.push(`/users/${user.id}`)
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
        <div className="post-header-metadata">
          <div></div>
          <div className="post-header-row-1">
            <div className="post-username">
              <p className="text-hoverable">
                <span onClick={() => handleUserClick()}>{user.username}</span>{" "}
                rated it
              </p>
            </div>
            <div className="post-rating">
              <Rating
                size="huge"
                className="post-rating-stars"
                defaultRating={review.rating}
                maxRating={5}
                disabled
              />
            </div>
          </div>
          <div className="post-created-at">{review.time_since_upload}</div>
        </div>
      </Card.Header>
      {userClicked && <Redirect to={`/users/${user.id}`} />}
    </Card.Content>
  );
};
