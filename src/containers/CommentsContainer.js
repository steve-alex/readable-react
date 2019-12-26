import React, { useState, useEffect } from 'react'
import { UserComment } from '../components/content/UserComment.js'
import { NewCommentForm } from '../forms/NewCommentForm.js'
import { Comment, Form, Button, Container } from 'semantic-ui-react'
import API from '../adapters/api.js'


export const CommentsContainer = ( {progress, review} ) => {
  const [comments, setComments] = useState(undefined)
  const post = progress || review
  const postType = progress ? "Progress" : "Review"

  useEffect(() => {
    API.getPostComments(post, postType)
      .then(resp => setComments(resp.comments.comments))
      .catch(console.log)
  }, [])

  return (
    <Container>
      <Comment.Group>
        {comments && 
          comments.map(comment => {
            return <UserComment comment={comment}/>
          })
        }
      </Comment.Group>
      <NewCommentForm
        postType={postType}
        postId={post.id}
        comments={comments}
        setComments={setComments}
      />
    </Container>
  )
}