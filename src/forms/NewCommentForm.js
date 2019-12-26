import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import API from '../adapters/api';

export const NewCommentForm = ( {postType, postId, comments, setComments} ) => {
  const [content, setContent] = useState("")

  const submitComment = (e) => {
    e.preventDefault()
    API.createComment(content, postType, postId)
      .then(res => setComments([...comments, res.comment]))
  }

  return(
    <Form reply
      onSubmit={submitComment}>
      <Form.TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}/>
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  )
}