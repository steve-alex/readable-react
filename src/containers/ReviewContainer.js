import React, { useEffect, useState } from 'react'
import ReviewBanner from '../components/ReviewBanner.js'
import ReviewContent from '../components/ReviewContent.js'
import LikesBanner from '../components/LikesBanner.js'
import CommentsContainer from '../containers/CommentsContainer.js'

const ReviewContainer = ( {review} ) => {

  return (
    <div>
      <ReviewBanner
        review={review}/>
      <ReviewContent
        review={review}/>
      <LikesBanner
        likes={review.likes}/>
      <CommentsContainer
        comments={review.comments}
      />
    </div>
  )
}

export default ReviewContainer;