import React, { useState, useEffect } from 'react'
import { Progress, Button, Input } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { UpdateReadingProgressForm } from '../../forms/UpdateReadingProgressForm';
import { Redirect } from 'react-router-dom'

export const CurrentlyReadingBookPanel = ( {index, book, setCurrentBook, setPageCount, pageCount, handleInputUpdate, handleSubmit} ) => {
  const [currentBookPage, setCurrentBookPage] = useState(undefined)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setCurrentBookPage(book.updates[0].page_number)
    setCurrentBook(index)
  }, [])

  const handleNextClick = () => {
    setPageCount(book.updates[0].page_number)
    setCurrentBook(index + 1)
  }

  const handleBackClick = () => {
    setPageCount(book.updates[0].page_number)
    setCurrentBook(index - 1)
  }

  return (
    <div>
      <h5>{book.title}</h5>
      <h5>{book.authors}</h5>
      <h5>{book.description}</h5>
      <img src={book.image_url}></img>


      <p>Last read: {book.updates[0].created_at.slice(0, 10)}</p>
      <Progress
        percent={Math.round((parseInt(currentBookPage) * 100 / parseInt(book.page_count)))}
        indicating
        progress/>
      <UpdateReadingProgressForm
        pageCount={pageCount}
        currentBookPage={currentBookPage}
        setCurrentBookPage={setCurrentBookPage}
        handleInputUpdate={handleInputUpdate}
        handleSubmit={handleSubmit}/>
      <ButtonBack onClick={() => handleBackClick()}>Back</ButtonBack>
      <ButtonNext onClick={() => handleNextClick()}>Next</ButtonNext>
      {clicked &&
        <Redirect to={`books/${book.copy_id}`} />}
    </div>
  )
}