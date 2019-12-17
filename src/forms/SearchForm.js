import React, { useState } from 'react'
import API from '../adapters/api.js'
import { Form, Button} from 'semantic-ui-react'

const SearchForm = ( {setSearchResults}) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    API.search(searchTerm)
      .then(searchResults => setSearchResults(searchResults))
      .then(() => setSearchTerm(""))
  }

  return (
    <div>
      <p></p>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field className="searchBar">
          <label>Get reading!</label>
          <input
            placeholder='Search for a book...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </Form.Field>
        <Button className="searchButton" type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default SearchForm;