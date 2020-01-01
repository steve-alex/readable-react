import React, { useState } from 'react';
import { Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import API from '../adapters/api.js'
import './forms.scss'

const AddBookToShelfForm = ( {book, userShelves, setCopy} ) => {
  const [shelfId, setShelfId] = useState("")
  const [messages, setMessages] = useState("")

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
      .then(res => {
        setMessages(res.messages)
        setCopy(res.shelf.latest_copy)
      })
      .catch(errors => setMessages(errors))
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
            <Modal.Content>
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
              {messages}
            </Modal.Content>
        </Modal>
      </div>
    </>
  )
}

export default AddBookToShelfForm;