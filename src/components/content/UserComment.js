import React, { useState, useEffect } from 'react'
import { Comment, Button} from 'semantic-ui-react'
import { CommentLikeButton } from '../buttons/CommentLikeButton.js'
import { parseDate } from '../../hooks/datetime.js'
import './content.scss'

export const UserComment = ( {comment} ) => {
  const [likesCount, setLikesCount] = useState(undefined)

  useEffect(() => {
    setLikesCount(comment.likes.length)
  }, [])

  return (
      <Comment>
        <div class="userComment">
          <div class="commentHeader"> 
            <Comment.Avatar src={comment.user_avatar} />
            <div class="commentHeaderMeta">
              <Comment.Author as='div'>
                <div class="commentAuthor">{comment.username}</div>
              </Comment.Author>
              <Comment.Metadata>
                <span>{comment.created_at.slice(0, 10)}</span>
              </Comment.Metadata>
            </div>
          </div>
          <Comment.Content className="commentContent">
            <Comment.Text>{comment.content}</Comment.Text>
            <div class="commentLikes">
              <CommentLikeButton
                comment={comment}
                likesCount={likesCount}
                setLikesCount={setLikesCount}/>
              <p className="likesCount">{likesCount} Likes</p>
            </div>
          </Comment.Content>
        </div>
      </Comment>
  )
}