import React, { useState, useEffect } from 'react'
import { Progress } from 'semantic-ui-react'

const RatingDistribution = ({reviewDistribution}) => {

  const getTotalRatings = () => {
    let totalRatings = Object.values(reviewDistribution).reduce((a, b) => a + b, 0)
    return totalRatings
  }

  const renderRatings = () => {
    let totalRatings = getTotalRatings()
    return Object.keys(reviewDistribution).map((key) => {
      let numberOfReviews = reviewDistribution[key]
      let percentage = parseInt(numberOfReviews) / parseInt(totalRatings);
      return(
        <div>
          <h1>{key} Stars</h1>
          <Progress
            percent={Math.round(percentage * 100)}
            progress
          />
        </div>
      )
   });
  }

  return (
    <div>
      {renderRatings()}
    </div>
  )
}

export default RatingDistribution;