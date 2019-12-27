import React, { useEffect, useState } from 'react';
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js';
import NewReviewForm from '../forms/NewReviewForm.js';
import UserReview from './userReview.js'
import FriendActivity from './FriendActivity.js'
import BookMetrics from './BookMetrics.js'
import BookShowPanel from './panels/BookShowPanel.js'
import BookShowReviewsContainer from '../containers/BookShowReviewsContainer.js'

const BookShow = ( {user, match} ) => {
  const [book, setBook] = useState(undefined)
  const [userHasReviewed, setUserHasReviewed] = useState(false)
  const [renderPage, setRenderPage] = useState(false)
  const [errors, setErrors] = useState(undefined)

  useEffect(() => {
    API.getBook(match.params.bookId)
      .then(res => {
        setBook(res.book)
        setUserHasReviewed(checkUserHasReviewed(res.book))
      })
      .catch(errors => setErrors(errors))
  }, [])

  const handleUpdate = () => {
    API.getBook(match.params.bookId)
    .then(res => {
      setBook(res.book)
      setUserHasReviewed(checkUserHasReviewed(res.book))
    })
    .catch(errors => setErrors(errors))
  }

  const checkUserHasReviewed = (book) => {
    let current_users_reviews = book.current_users_reviews[0]
    if (current_users_reviews){
      return true
    } else {
      return false
    }
  }

  const renderUsersReviews = () => {
    return (
      book.current_users_reviews.map(review => {
        return <UserReview review={review}/>
    })
    )
  }

  return (
    <div>
      {book &&
        <div>
          <BookShowPanel book={book} />
          <BookMetrics
            metrics={book.metrics}/>
          <AddBookToShelfForm
            book={book}
            userShelves={user.shelves}/>
          <NewReviewForm
            bookId={book.id}
            userId={user.id}
            setUserHasReviewed={setUserHasReviewed}
            renderPage={renderPage}
            setRenderPage={setRenderPage}
            handleUpdate={handleUpdate}/>
          <BookShowReviewsContainer
            book={book}
          />
        </div>
      }
    </div>
  )
}

export default BookShow;