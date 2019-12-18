import React, { useState } from 'react';
import { Form, Button, TextArea, Rating } from 'semantic-ui-react'
import API from '../adapters/api.js'

const NewReviewForm = ( {bookId, userId, setUserHasReviewed, renderPage, setRenderPage, handleUpdate} ) => {
  const [content, setContent] = useState("")
  const [rating, setRating] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    API.createReview(content, rating, bookId, userId)
      .then(setUserHasReviewed(true))
      .then(() => handleUpdate())
      .catch(console.log)
    //Something here to make sure the review has gone through
  }

  const handleClick = (e) => {
    e.preventDefault()
    setRating(parseInt(e.target.getAttribute("aria-posinset")))
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Form.Field>
        <TextArea
          placeholder="What do you think?"
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
      </Form.Field>
      <Form.Field>
      <Rating
        icon='star'
        defaultRating={0}
        maxRating={5}
        value={rating}
        onClick={(e) => handleClick(e)}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )

}


export default NewReviewForm;