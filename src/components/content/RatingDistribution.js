import React from "react";
import { Progress, Rating } from "semantic-ui-react";

export const RatingDistribution = ({ reviewDistribution }) => {
  const getTotalRatings = () => {
    let totalRatings = Object.values(reviewDistribution).reduce((a, b) => a + b, 0);
    return totalRatings;
  };

  const renderRatings = () => {
    let totalRatings = getTotalRatings();
    return Object.keys(reviewDistribution)
      .reverse()
      .map(key => {
        let numberOfReviews = reviewDistribution[key];
        let percentage = parseInt(numberOfReviews) / parseInt(totalRatings);
        return (
          <>
            {console.log(key)}
            <div>
              <Rating defaultRating={key} maxRating={5} disabled />
              <Progress
                color="blue"
                percent={Math.round(percentage * 100)}
                progress
              />
            </div>
          </>
        );
      });
  };

  return <div>{renderRatings()}</div>;
};