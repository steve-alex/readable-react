import React, { useState, useEffect } from 'react'
import { Progress, Button, Input } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { UpdateReadingProgressForm } from '../../forms/UpdateReadingProgressForm';
import { Redirect } from 'react-router-dom'

export const CurrentlyReadingBookPanel = ( {index, book, setCurrentBook, currentPage, setCurrentPage, handleInputUpdate, createUpdate} ) => {
  const [currentBookPage, setCurrentBookPage] = useState(undefined)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (book.updates[0]) {
      setCurrentBookPage(book.updates[0].page_number)
      setCurrentBook(index)
    } else {
      setCurrentBookPage(0)
      setCurrentBook(index)
    }
  }, [])

  const handleNextClick = () => {
    setCurrentPage(currentBookPage)
    setCurrentBook(index + 1)
  }

  const handleBackClick = () => {
    setCurrentPage(currentBookPage)
    setCurrentBook(index - 1)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
  }

  if (book) {
    return (
      <>
      <div className="currently-reading-panel">
        <ButtonBack onClick={() => handleBackClick()}>Back</ButtonBack>
        <div class="currently-reading-book-content">
          <h5
            className="text-hoverable"
            onClick={(e) => handleClick(e)}>{book.title}</h5>
          <h5>By {book.authors}</h5>
          <img
            src={book.image_url}
            className="image-hoverable"
            onClick={(e) => handleClick(e)}></img>
          {book.updates[0] &&
          <p>Last read: {book.updates[0].created_at.slice(0, 10)}</p>
          }
        </div>

        <div class="currently-reading-progress">
          <Progress
            percent={Math.round((parseInt(currentBookPage) * 100 / parseInt(book.page_count)))}
            indicating
            progress/>
          
          <UpdateReadingProgressForm
            pageCount={book.page_count}
            currentBookPage={currentBookPage}
            setCurrentBookPage={setCurrentBookPage}
            handleInputUpdate={handleInputUpdate}
            createUpdate={createUpdate}/>
        </div>
        <ButtonNext onClick={() => handleNextClick()}>Next</ButtonNext>
        {clicked &&
          <Redirect to={`books/${book.copy_id}`} />}
      </div>
      </>
    )
  } else {
    return(<></>)
  }

}