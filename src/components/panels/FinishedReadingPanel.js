import React, { useEffect, useState } from 'react'
import { Modal } from 'semantic-ui-react'
import API from '../../adapters/api.js'

export const FinishedReadingPanel = ( {finishedReading, bookToUpdate} ) => {
  const [book, setBook] = useState(undefined)

  useEffect(() => {
    if (bookToUpdate) {
      API.getCopy(bookToUpdate)
      .then(res => setBook(res))
    }
  }, [])

  return(
    <>
      <Modal
        open={finishedReading}>
        <Modal.Header>Finished Reading!</Modal.Header>
      </Modal>
    </>
  )
}