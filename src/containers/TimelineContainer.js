import React from "react";
import { Card } from "semantic-ui-react";
import { ReviewContainer } from "../containers/ReviewContainer.js";
import { ProgressContainer } from "../containers/ProgressContainer.js";

export const TimelineContainer = ({ timeline}) => {
  const createPostComponent = post => {
    let postType = Object.keys(post)[0];
    if (postType === "review") {
      return (
        <ReviewContainer key={post.review.created_at} review={post.review} commentsHidden={true} />
      );
    } else {
      return (
        <ProgressContainer key={post.progress.created_at} progress={post.progress} commentsHidden={true} />
      );
    }
  };

  return (
    <Card.Group>
      {timeline.posts &&
        timeline.posts.map(post => {
          return createPostComponent(post);
        })}
    </Card.Group>
  );
};
