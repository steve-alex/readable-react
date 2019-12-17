import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button, Dropdown } from 'semantic-ui-react'
import API from '../adapters/api.js'

const AddToShelfForm = ( {book, userShelves} ) => {
  const [shelfId, setShelfId] = useState("")

  const shelfNames = () => {
    const shelfNames = userShelves.map(shelf => {
      return {
        key: shelf.name,
        text: shelf.name,
        value: shelf.id
      }
    })
    return shelfNames
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    API.addBookToShelf(book, shelfId)
      .then(console.log)
      //Make this more dynamic and render errors or something?
  }

  const onChange = (e) => {
    let selectedOption = e.target.childNodes[0].textContent
    let selectedShelf = userShelves.filter(shelf => {
      return shelf.name === selectedOption;
    })
    setShelfId(selectedShelf[0].id)
  }

  return (
    <Form
      onSubmit={handleSubmit}>
      <Form.Field>
        <Dropdown
          placeholder="Select Shelf"
          fluid
          search
          selection
          options={shelfNames()}
          onChange={onChange}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>

  )

}


export default AddToShelfForm;