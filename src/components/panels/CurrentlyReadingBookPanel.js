import React, { useState, useEffect } from 'react'
import { Progress, Button, Input } from 'semantic-ui-react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import { UpdateReadingProgressForm } from '../../forms/UpdateReadingProgressForm';
import { Redirect } from 'react-router-dom'
import './panels.scss'

export const CurrentlyReadingBookPanel = ( {index, book, totalSlides, currentSlide, setCurrentSlide, currentlyReading, setCurrentBook, setPageToUpdate, createUpdate} ) => {
  const [currentBookPage, setCurrentBookPage] = useState(undefined)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (book.updates[0]) {
      setCurrentBookPage(book.updates[0].page_number)
    } else {
      setCurrentBookPage(0)
    }
    setCurrentBook(index)
  }, [])

  const handleNextClick = (e) => {
    e.preventDefault()
    if (currentSlide === (totalSlides - 1)) {
      setCurrentSlide(currentSlide)
    } else {
      index += 1
      setCurrentBook(index)
      setPageToUpdate(getPageToUpdate(index))
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handleBackClick = (e) => {
    e.preventDefault()
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide)
    } else {
      index -= 1
      setCurrentBook(index)
      setPageToUpdate(getPageToUpdate(index))
      setCurrentSlide(currentSlide - 1)
    }

  }

  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
  }

  const getPageToUpdate = (index) => {
    if (currentlyReading[index].updates[0]) {
      return currentlyReading[index].updates[0].page_number
    } else {
      return 0
    }
  }

  if (book) {
    return (
      <>
      <div className="currentlyReadingPanel">
        <Button
          color="blue"
          icon='left chevron'
          inverted
          className="backButton"
          onClick={(e) => handleBackClick(e)}/>
        <div className="currentlyReadingBookContent">
          <h3
            className="text-hoverable"
            onClick={(e) => handleClick(e)}>{book.title}</h3>
          <h5>By {book.authors}</h5>
          <img
            src={book.image_url}
            className="image-hoverable"
            onClick={(e) => handleClick(e)}></img>
          {book.updates[0] &&
          <p className="lastRead">Last read: {book.updates[0].time_since_upload}</p>
          }
        </div>

        <div className="currentlyReadingProgress">
          <h5
            className="totalPages">Total pages: {book.page_count}</h5>
          <Progress
            percent={Math.round((parseInt(currentBookPage) * 100 / parseInt(book.page_count)))}
            indicating
            progress/>
          <UpdateReadingProgressForm
            pageCount={book.page_count}
            currentBookPage={currentBookPage}
            setCurrentBookPage={setCurrentBookPage}
            setPageToUpdate={setPageToUpdate}
            createUpdate={createUpdate}/>
        </div>
        <Button
          color="blue"
          inverted
          className="nextButton"
          icon='right chevron'
          onClick={(e) => handleNextClick(e)}/>
        {clicked &&
          <Redirect to={`books/${book.book_id}`} />}
      </div>
      </>
    )
  } else {
    return(<></>)
  }

}