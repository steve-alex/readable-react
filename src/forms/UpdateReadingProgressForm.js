import React, { useState, useEffect } from 'react'
import { Input, Form, Button } from 'semantic-ui-react'
import { usePrevious } from '../hooks/usePrevious';

export const UpdateReadingProgressForm = ( {handleInputUpdate, handleSubmit, setCurrentBookPage, currentBookPage} ) => {
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
    }, 500));
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field>
        <Input
          value={currentBookPage}
          onChange={handleChange}/>
        </Form.Field>
        <Button type='submit'>Update</Button>
      </Form>

    </div>
  )
}