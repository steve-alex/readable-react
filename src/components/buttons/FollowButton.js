import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import API from "../../adapters/api";
import "./buttons.scss";

export const FollowButton = ({
  followObject,
  userId,
  followerCount,
  setFollowerCount
}) => {
  const [userFollows, setUserFollows] = useState(false);
  const [followId, setFollowId] = useState(undefined);
  const [errors, setErrors] = useState(undefined);

  useEffect(() => {
    if (followObject[0]) {
      setUserFollows(true);
      setFollowId(followObject[0].id);
    } else {
      setUserFollows(false);
    }
  }, []);

  const handleClick = () => {
    userFollows
      ? API.unfollowUser(followId)
          .then(res => handleResponse(res))
          .then(setFollowerCount((followerCount -= 1)))
      : API.followUser(userId)
          .then(res => handleResponse(res))
          .then(setFollowerCount((followerCount += 1)));
  };

  const handleResponse = res => {
    res.errors ? setErrors(res.errors) : setUserFollows(!userFollows);
    setFollowId(res.follow ? res.follow.id : undefined);
  };

  const handleMouseOver = e => {
    e.persist();
    if (e.target.nodeName === "BUTTON") {
      e.target.style.backgroundColor = "orange";
      e.target.style.color = "white";
      e.target.style.borderBlockEndColor = "orange";
    } else {
      e.target.parentNode.style.backgroundColor = "orange";
      e.target.parentNode.style.color = "white";
      e.target.parentNode.style.borderBlockEndColor = "orange";
    }
  };

  const handleMouseLeave = e => {
    e.persist();
    if (e.target.nodeName === "BUTTON") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "green";
      e.target.style.borderBlockEndColor = "green";
    } else {
      e.target.parentNode.style.backgroundColor = "white";
      e.target.parentNode.style.color = "green";
      e.target.parentNode.style.borderBlockEndColor = "green";
    }
  };

  return (
    <div className="followButton">
      {userFollows && (
        <Button
          color="green"
          inverted
          animated="fade"
          onClick={handleClick}
          onMouseOver={e => handleMouseOver(e)}
          onMouseLeave={e => handleMouseLeave(e)}
        >
          <Button.Content visible>Following</Button.Content>
          <Button.Content hidden>Unfollow</Button.Content>
        </Button>
      )}
      {!userFollows && (
        <Button color="green" inverted onClick={handleClick}>
          <Button.Content visible>Follow</Button.Content>
        </Button>
      )}
    </div>
  );
};