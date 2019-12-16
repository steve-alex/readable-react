import React, { useState, useEffect } from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

const AddToShelfDropDown = ( {shelves} ) => {

  
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
    <Dropdown
      placeholder="Select Shelf"
      fluid
      selection
      options={shelfNames()}
    />
  )

}

export default AddToShelfDropDown;