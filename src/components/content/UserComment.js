import React, { useState, useEffect } from 'react'
import { Comment } from 'semantic-ui-react'
import { CommentLikeButton } from '../buttons/CommentLikeButton.js'

export const UserComment = ( {comment} ) => {
  const [likesCount, setLikesCount] = useState(undefined)

  useEffect(() => {
    setLikesCount(comment.likes.length)
  }, [])

  return (
    <div>
      <Comment>
        <Comment.Avatar src={comment.user_avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{comment.username}</Comment.Author>
          <Comment.Metadata>
            <span>{comment.created_at.slice(0, 10)}</span>
          </Comment.Metadata>
          <Comment.Text>{comment.content}</Comment.Text>
          <Comment.Text>{likesCount} Likes</Comment.Text>
          <Comment.Actions>
            <Comment.Action>
              <CommentLikeButton
                comment={comment}
                likesCount={likesCount}
                setLikesCount={setLikesCount}/>
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </div>
  )
}