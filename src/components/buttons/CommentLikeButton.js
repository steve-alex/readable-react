import React, { useState, useEffect } from 'react'
import API from '../../adapters/api';

export const CommentLikeButton = ( {comment, likesCount, setLikesCount} ) => {
  const [liked, setLiked] = useState(undefined)

  useEffect(() => {
    setLiked(comment.current_user_likes)
  }, [])

  const handleClick = () => {
    liked?
    API.unlikeComment(liked.id)
      .then(setLiked(false))
      .then(setLikesCount(likesCount -= 1))
    :
    API.likeComment(comment.id)
      .then(res => setLiked(res.like))
      .then(setLikesCount(likesCount += 1))
  }

  return(
    <>
      <div
        onClick={handleClick}>
        {liked ? "unlike": "like"}</div>
    </>
  )
}