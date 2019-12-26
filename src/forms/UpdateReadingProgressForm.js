import React, { useState, useEffect } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'
import { usePrevious } from '../hooks/usePrevious';

export const UpdateReadingProgressForm = ( {pageCount, currentBookPage, setCurrentBookPage, handleInputUpdate, createUpdate} ) => {
  const [typing, setTyping] = useState(false)
  const [typingTimeout, setTypingTimeout] = useState(undefined)

  const handleChange = (e) => {
    e.persist()
    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    setCurrentBookPage(e.target.value)
    setTyping(true)
    setTypingTimeout(setTimeout(() => {
      handleInputUpdate(e.target.value)
      setTyping(false)
    }, 100));
  }

  return (
    <div
      class="reading-progress-form">
      <Form
        onSubmit={(e) => createUpdate(e, pageCount)}>
        <Form.Group>
          <Form.Input
            width={5}
            value={currentBookPage}
            onChange={handleChange}/>
            <Form.Button
              type='submit'
              width={3}>Update</Form.Button>
        </Form.Group>
      </Form>

    </div>
  )
}