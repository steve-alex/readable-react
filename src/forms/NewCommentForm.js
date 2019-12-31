import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import API from '../adapters/api';

export const NewCommentForm = ( {postType, postId, comments, setComments} ) => {
  const [content, setContent] = useState(undefined)

  const submitComment = (e) => {
    e.preventDefault()
    API.createComment(content, postType, postId)
      .then(res => setComments([...comments, res.comment]))
      .then(() => setContent(""))
  }

  return(
    <Form reply
      className="newCommentForm"
      onSubmit={submitComment}>
      <Form.TextArea
        value={content}
        placeholder="What are your thoughts on this..?"
        onChange={(e) => setContent(e.target.value)}/>
      <div className="newCommentButton">
        <Button type="submit" content='Leave Comment' labelPosition='left' icon='edit' primary />
      </div>
    </Form>
  )
}