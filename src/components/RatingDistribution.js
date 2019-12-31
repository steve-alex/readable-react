import React, { useState, useEffect } from 'react'
import { Progress, Rating } from 'semantic-ui-react'

const RatingDistribution = ({reviewDistribution}) => {

  const getTotalRatings = () => {
    let totalRatings = Object.values(reviewDistribution).reduce((a, b) => a + b, 0)
    return totalRatings
  }

  const renderRatings = () => {
    let totalRatings = getTotalRatings()
    return Object.keys(reviewDistribution).reverse().map((key) => {
      let numberOfReviews = reviewDistribution[key]
      let percentage = parseInt(numberOfReviews) / parseInt(totalRatings);
      return(
        <>
        {console.log(key)}
        <div>
          <Rating defaultRating={key} maxRating={5} disabled/>
          <Progress
            color="blue"
            percent={Math.round(percentage * 100)}
            progress
          />
        </div>
        </>
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