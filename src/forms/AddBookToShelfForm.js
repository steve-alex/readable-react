import React, { useState } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react'
import API from '../adapters/api.js'

const AddBookToShelfForm = ( {book, userShelves} ) => {
  const [shelfId, setShelfId] = useState("")

  const shelfNames = () => {
    return userShelves.map(shelf => {
      return {
        key: shelf.name,
        text: shelf.name,
        value: shelf.id
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    API.addBookToShelf(book, shelfId)
      //This could be more dynamic and display something cool when you add a book to a shelf?
  }

  const onChange = (e) => {
    if (e.target.childNodes[0]) {
      let selectedOption = e.target.childNodes[0].textContent
      let selectedShelf = userShelves.filter(shelf => {
        return shelf.name === selectedOption;
      })
      setShelfId(selectedShelf[0].id)
    }
    //This if statement gets rid of a very annoying error, look properly into what is actually causing it later
  }

  return (
    <Form
      onSubmit={handleSubmit}>
        <Form.Field className="addToShelfForm">
          <Dropdown
            placeholder="Add this book to a shelf..."
            fluid
            search
            selection
            options={shelfNames()}
            onChange={onChange}/>
          <Button type='submit'>Submit</Button>
        </Form.Field>
    </Form>
  )
}

export default AddBookToShelfForm;