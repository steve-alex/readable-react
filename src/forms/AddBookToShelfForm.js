import React, { useState } from 'react';
import { Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import API from '../adapters/api.js'
import './forms.scss'

const AddBookToShelfForm = ( {userShelves, book} ) => {
  const [shelfId, setShelfId] = useState("")
  const [clicked, setClicked] = useState(false)

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
  }

  const onChange = (e) => {
    if (e.target.childNodes[0]) {
      let selectedOption = e.target.childNodes[0].textContent
      let selectedShelf = userShelves.filter(shelf => {
        return shelf.name === selectedOption;
      })
      setShelfId(selectedShelf[0].id)
    }
  }

  return (
    <>
      <div className="addToShelfModal">
        <Modal
          trigger={<Button color="teal"> Add To Shelf </Button>}
          centred={false}>
          <Modal.Header>Add {book.title} to a shelf</Modal.Header>
            <Form
              onSubmit={handleSubmit}>
              <Form.Field className="addToShelfForm">
                <Dropdown
                  color="blue"
                  placeholder="Add this book to a shelf..."
                  fluid
                  search
                  selection
                  options={shelfNames()}
                  onChange={onChange}/>
                <Button color="red" type='submit'>Submit</Button>
              </Form.Field>
            </Form>
        </Modal>
      </div>
    </>
  )
}

export default AddBookToShelfForm;