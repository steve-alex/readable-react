import React from 'react'

const ReviewContent = ( {review} ) => {
  return (
    <div>
      <div className="reviewBookImage">
        <img src={review.book.image_url}></img>
      </div>
      <div className="reviewContent">
        <h5>{review.book.title}</h5>
        <h5>{review.book.subtitle}</h5>
        <h5>{review.book.authors}</h5>
        <h5>{review.book.categories}</h5>
        <h5>{review.content}</h5>
      </div>
    </div>
  )
}

export default ReviewContent;