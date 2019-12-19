import React, { useState, useEffect } from 'react'
import RatingDistribution from './RatingDistribution.js'

const BookMetrics = ( {metrics} ) => {

  const getAverageRating = () => {
    let numberOfReviews = getNumberOfReviews()
    let sumOfRatings = getSumOfRatings()
    let averageRating = Math.round((sumOfRatings / numberOfReviews)* 100) / 100
    return averageRating
  }

  const getSumOfRatings = () => {
    let sumOfRatings = 0;
    for (const [key, value] of Object.entries(metrics.review_distribution)){
      if (key !== "review_count") {
        sumOfRatings += (parseInt(key) * value)
      }
    }
    return sumOfRatings;
  }

  const getNumberOfReviews = () => {
    return metrics.review_distribution.review_count
  }

  return(
    <div>
        <p>Number of users currently reading: {metrics.currently_reading_count}</p>
        <p>Average Rating: {getAverageRating()}</p>
        <p>Number of Reviews: {getNumberOfReviews()}</p>
        {metrics &&
         <RatingDistribution 
          reviewDistribution={metrics.review_distribution}/>       
        }
    </div>
  )
}

export default BookMetrics;