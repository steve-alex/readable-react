import React, { useState, useEffect } from 'react';
import { Rating } from 'semantic-ui-react'


const userReview = ( {review} ) => {
  
  return (
    <div>
      <p>{review.content}</p>
      <p>{review.created_at.slice(0, 10)}</p>
      <Rating
        icon="star"
        defaultRating={review.rating}
        maxRating={5}
        disabled
      />
      <br></br>
    </div>
  )
}

export default userReview;