import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'

export const SubmitProgressForm = () => {
  return (
    <div>
≈      <h1>Submit Progress</h1>
      <Form>
        <Form.field>
          <input placeholder='' />
        </Form.field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}