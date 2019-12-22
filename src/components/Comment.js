import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentComponent = ( {comment} ) => {

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
          <Comment.Text>{comment.likes.length} Likes</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Like</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </div>
  )
}

export default CommentComponent;