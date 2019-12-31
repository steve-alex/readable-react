import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

export const SubmitProgressForm = ( {createProgress} ) => {
  const [content, setContent] = useState("")

  return(
    <>
      <Form
        onSubmit={(e) => createProgress(e, content)}>
        <Form.Field>
        <Input
          placeholder="Share your progress..."
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}