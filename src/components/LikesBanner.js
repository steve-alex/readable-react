import React from 'react';

const LikesBanner = ( {likes} ) => {
  return (
    <div>{likes.length} Likes</div>
  )
}

export default LikesBanner;