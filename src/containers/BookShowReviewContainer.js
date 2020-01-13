import React from "react";
import { Card } from "semantic-ui-react";
import { ReviewBanner } from "../components/banners/ReviewBanner";
import { LikesPanel } from "../components/panels/LikesPanel";
import { CommentsContainer } from "./CommentsContainer";
import "./containers.scss";


export const BookShowReviewContainer = ({ review }) => {
  if (review) {
    return (
      <Card fluid>
        <ReviewBanner review={review} />
        <p className="bookShowReviewContent">{review.content}</p>
        <LikesPanel likes={review.likes} review={review} />
        <CommentsContainer review={review} visible={false} />
      </Card>
    );
  }
};