import React, { useState, useEffect } from 'react'
import { Rating } from 'semantic-ui-react'

const ReviewBanner = ( {review} ) => {

  const user = review.user;

  return (
    <div>
        <img src={user.avatar}></img>
        <h5>{user.username} rated it</h5>
        <Rating
          defaultRating={review.rating}
          maxRating={5}
          disabled        
        />
        <h5>{review.created_at.slice(0, 10)}</h5>
    </div>
  )
}

export default ReviewBanner;