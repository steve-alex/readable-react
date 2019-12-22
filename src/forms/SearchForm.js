import React, { useState } from 'react'
import API from '../adapters/api.js'
import { Form, Button, Menu, Icon } from 'semantic-ui-react'

const SearchForm = ( {setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    API.search(searchTerm)
      .then(searchResults => setSearchResults(searchResults))
      .then(() => setSearchTerm(""))
  }

  const displaySearchTerm = () => {
    return "Search for a book..."
  }

  return (
    <div>
      <p></p>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field className="searchBar">
          <label>Get reading!</label>
          <input
            placeholder={displaySearchTerm()}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </Form.Field>
        <Menu icon='labeled'>
          <Menu.Item
            name='book'
            active={searchType === 'book'}
            onClick={() => setSearchType('book')}
          >
            <Icon name='book' />
            Books
          </Menu.Item>
        </Menu>
        <Button className="searchButton" type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default SearchForm;