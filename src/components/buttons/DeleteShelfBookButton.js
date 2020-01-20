import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import '../../pages/userProfile.scss'

export const DeleteShelfBookButton = ( {shelfCopyId} ) => {

  // const handleClick = () => {

  // }
  return (
    <div className="deleteBookButton">
      <Button inverted color="red">X</Button>
    </div>
  )
}