import React, { useState } from 'react'
import API from '../adapters/api.js'
import { Form, Button, Menu, Icon, Input } from 'semantic-ui-react'
import './forms.scss'

const SearchForm = ( {setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("title")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchType === "user") {
      API.findUsers(searchTerm)
        .then(searchResults => setSearchResults(searchResults))
        .then(() => setSearchTerm(""))
    } else {
      API.search(searchTerm, searchType)
      .then(searchResults => setSearchResults(searchResults))
      .then(() => setSearchTerm(""))
    }
  }

  const displaySearchTerm = () => {
    if (searchType === "user") {
      return 'Search for a user...'
    } else {
      return `Search for a book by ${searchType}...`
    }
  }

  return (
    <div className="searchForm">
      <Form
        onSubmit={handleSubmit}>
          <Form.Field className="searchBar">
            <Input
              width={3}
              placeholder={displaySearchTerm()}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>

              <Button width={5} className="searchButton" type='submit'>Submit</Button>
          </Form.Field>
          <Menu icon='labeled'>
            <Menu.Item
              name='title'
              active={searchType === 'title'}
              onClick={() => setSearchType('title')}>
              Title
            </Menu.Item>
            <Menu.Item
              name='author'
              active={searchType === 'author'}
              onClick={() => setSearchType('author')}>
              Author
            </Menu.Item>
            <Menu.Item
              name='subject'
              active={searchType === 'subject'}
              onClick={() => setSearchType('subject')}>
              Subject
            </Menu.Item>
            <Menu.Item
              name='user'
              active={searchType === 'user'}
              onClick={() => setSearchType('user')}>
              User
            </Menu.Item>
          </Menu>
      </Form>
    </div>
  )
}

export default SearchForm;