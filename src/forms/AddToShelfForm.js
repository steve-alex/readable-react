import React, { useEffect, useState } from 'react';
import { Route, Link } from "react-router-dom"
import paths from '../paths.js';
import { Input, Form, Button} from 'semantic-ui-react'
import API from '../adapters/api.js'
import AddToShelfDropDown from '../buttons/AddToShelfDropDown.js'

const AddToShelfForm = ( {book, shelves} ) => {
  const [selectedShelf, setSelectedShelf] = useState("")

  return (
    <div className="searchResult">
      <AddToShelfDropDown shelves={shelves}/>
    </div>
  )
}

export default AddToShelfForm;