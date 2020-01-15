import React from "react";
import { ReviewBanner } from "../components/banners/ReviewBanner.js";
import { ReviewContent } from "../components/content/ReviewContent.js";
import { LikesPanel } from "../components/panels/LikesPanel.js";
import { CommentsContainer } from "../containers/CommentsContainer.js";
import { Card } from "semantic-ui-react";

export const ReviewContainer = ({ review, commentsVisible }) => {
    return (
      <Card fluid color="teal">
        <ReviewBanner review={review} />
        <ReviewContent review={review} />
        <LikesPanel likes={review.likes} review={review} />
        <CommentsContainer review={review} visible={commentsVisible} />
      </Card>
    );
};
