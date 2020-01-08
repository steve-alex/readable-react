import React, { useEffect, useState } from 'react';
import API from '../adapters/api.js'
import UserReview from './userReview.js'
import BookShowPanel from './panels/BookShowPanel.js'
import BookShowReviewsContainer from '../containers/BookShowReviewsContainer.js'
import { FollowersWithBookPanel } from '../components/panels/FollowersWithBookPanel.js'

const BookShow = ( {user, match} ) => {
  const [book, setBook] = useState(undefined)
  const [userHasReviewed, setUserHasReviewed] = useState(false)
  const [errors, setErrors] = useState(undefined)

  useEffect(() => {
    API.getBook(match.params.bookId)
      .then(res => {
        setBook(res.book)
        setUserHasReviewed(book.current_users_reviews)
      })
      .catch(errors => setErrors(errors))
  }, [])

  const submitReview = () => {
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

  return (
    <div>
      {book &&
        <div>
          <BookShowPanel
            user={user}
            book={book}
            setUserHasReviewed={setUserHasReviewed}
            submitReview={submitReview}/>
          {/* <FollowersWithBookPanel
            book={book}/> */}
          <BookShowReviewsContainer
            book={book}
            userHasReviewed={userHasReviewed}/>
          {/* <BooksByAuthorPanel /> */}
        </div>
      }
    </div>
  )
  
}


export default BookShow;