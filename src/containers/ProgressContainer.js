import React from "react";
import { ProgressBanner } from "../components/banners/ProgressBanner";
import { ProgressContentContainer } from "./ProgressContentContainer";
import { LikesPanel } from "../components/panels/LikesPanel.js";
import { CommentsContainer } from "../containers/CommentsContainer.js";
import { Card } from "semantic-ui-react";

export const ProgressContainer = ({ progress, commentsHidden }) => {
  if (progress) {
    return (
      <Card fluid color="teal">
        <ProgressBanner progress={progress} />
        <ProgressContentContainer progress={progress} />
        <LikesPanel likes={progress.likes} progress={progress} />
        <CommentsContainer
          commentsHidden={commentsHidden}
          progress={progress}
        />
      </Card>
    );
  } else {
    return <></>;
  }
};
