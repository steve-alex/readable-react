import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button, Dropdown } from 'semantic-ui-react'
import API from '../adapters/api.js'
import AddToShelfDropDown from '../buttons/AddToShelfDropDown.js'

const AddToShelfForm = ( {book, shelves} ) => {
  const [selectedShelfId, setSelectedShelfId] = useState("")

  const shelfNames = () => {
    return Array.from(shelves.map(shelf => {
      return {
        key: shelf.name,
        text: shelf.name,
        value: shelf.id
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    API.addBookToShelf(book.google_id, selectedShelfId)
      .then(console.log)
  }

  return (
    <Form
      onChange={handleSubmit}>
      <Form.Field>
        <Dropdown
        placeholder="Select Shelf"
        fluid
        selection
        options={shelfNames()}
        value={selectedShelfId}
        onChange={(e) => setSelectedShelfId(e.target.value)}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

  )

}


export default AddToShelfForm;