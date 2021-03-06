import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import API from "../../adapters/api.js";
import "./panels.scss";

export const LikesPanel = ({ likes, progress, review }) => {
  const [userLikes, setUserLikes] = useState(undefined);
  const [likeId, setLikeId] = useState(undefined);
  const [likesCount, setsLikesCount] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const post = progress || review;
  const postType = progress ? "Progress" : "Review";

  useEffect(() => {
    if (post && post.current_user_likes) {
      setUserLikes(true);
      setLikeId(post.current_user_likes.id);
    } else {
      setUserLikes(false);
    }
    setsLikesCount(likes.length);
  }, []);

  const handleClick = () => {
    userLikes
      ? API.unlikePost(likeId)
          .then(res => handleResponse(res))
          .then(setsLikesCount(likesCount - 1))
      : API.likePost(post.id, postType)
          .then(res => handleResponse(res))
          .then(setsLikesCount(likesCount + 1));
  };

  const handleResponse = res => {
    res.errors
      ? setErrors(res.errors).then(console.log(errors))
      : setUserLikes(!userLikes);
    setLikeId(res.like ? res.like.id : undefined);
  };

  return (
    <div className="likesPanel">
      {post && (
        <>
          <div className="likesPanelContent">
            <Button
              className="likeButton"
              inverted
              color={userLikes ? "red" : "green"}
              onClick={handleClick}
            >
              {userLikes ? "Unlike" : "Like"}
            </Button>
            <div className="likesCount">{likesCount} {(likesCount === 1) ? "Like": "Likes"} </div>
          </div>
        </>
      )}
    </div>
  );
};
