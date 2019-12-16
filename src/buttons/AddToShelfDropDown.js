import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Form } from 'semantic-ui-react'

const AddToShelfDropDown = ( {shelves, setSelectedShelf} ) => {

  
  const shelfNames = () => {
    return Array.from(shelves.map(shelf => {
      return {
        key: shelf.name,
        text: shelf.name,
        value: shelf.name
      }
      })
    )
  }

  return (
    <Form>
      <Form.Field>
        <Dropdown
        placeholder="Select Shelf"
        fluid
        selection
        options={shelfNames()}
      />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

  )

}

export default AddToShelfDropDown;