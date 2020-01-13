import React, { useState, useEffect } from "react";
import { Comment } from "semantic-ui-react";
import { CommentLikeButton } from "../buttons/CommentLikeButton.js";
import { Redirect } from "react-router-dom";
import "./content.scss";

export const UserComment = ({ comment }) => {
  const [likesCount, setLikesCount] = useState(undefined);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setLikesCount(comment.likes.length);
  }, []);

  return (
    <Comment>
      <div className="userComment">
        <div className="commentHeader">
          <Comment.Avatar
            onClick={() => setClicked(true)}
            className="image-hoverable"
            src={comment.user_avatar}
          />
          <div className="commentHeaderMeta">
            <Comment.Author as="div">
              <div className="text-hoverable">
                <span onClick={() => setClicked(true)}>{comment.username}</span>
              </div>
            </Comment.Author>
            <Comment.Metadata>
              <span>{comment.time_since_upload}</span>
            </Comment.Metadata>
          </div>
        </div>
        <Comment.Content className="commentContent">
          <Comment.Text>{comment.content}</Comment.Text>
          <div class="commentLikes">
            <CommentLikeButton
              comment={comment}
              likesCount={likesCount}
              setLikesCount={setLikesCount}
            />
            <p className="likesCount">{likesCount} Likes</p>
          </div>
        </Comment.Content>
        {clicked && <Redirect to={`/users/${comment.user_id}`} />}
      </div>
    </Comment>
  );
};
