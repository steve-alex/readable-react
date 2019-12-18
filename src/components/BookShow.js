import React, { useEffect, useState } from 'react';
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js';
import NewReviewForm from '../forms/NewReviewForm.js';
import UserReview from './userReview.js'
import FriendActivity from './FriendActivity.js'
import BookMetrics from './BookMetrics.js'

const BookShow = ( {match, instanceToRender, setInstanceToRender, user} ) => {
  const [book, setBook] = useState([])
  const [userHasReviewed, setUserHasReviewed] = useState(false)
  const [renderPage, setRenderPage] = useState(false)

  useEffect(() => {
    API.getBook(instanceToRender)
      .then(res => {
        setBook(res.book)
        setUserHasReviewed(checkUserHasReviewed(res.book))
      })
  }, [])

  const handleUpdate = () => {
    API.getBook(instanceToRender)
    .then(res => {
      setBook(res.book)
      setUserHasReviewed(checkUserHasReviewed(res.book))
    })
  }

  const checkUserHasReviewed = (book) => {
    let current_users_reviews = book.current_users_reviews[0]
    if (current_users_reviews){
      return true
    } else {
      return false
    }
  }

  const getPercentage = () => {

  }

  // const renderMostAppearedOnShelves = () => {
  //   let shelvesBookAppearsOn = book.metrics.most_appeared_on_shelves
  //   if (book.metrics.most_appeared_on_shelves !== undefined) {
  //     return book.metrics.most_appeared_on_shelves.map(shelf => {
  //       return <p>{shelf[0]} {shelf[1]}</p>
  //     })
  //   } else {
  //     return <p>This book has not been added to a shelf yet</p>
  //   }
  // }

  const renderUsersReviews = () => {
    return (
      book.current_users_reviews.map(review => {
      return <UserReview review={review}/>
    })
    )
  }

  return (
    <div>
      <img src={`${book.image_url}`}></img>
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2>
      <h4>{book.authors}</h4>
      <p>{book.description}</p>
      {book.metrics &&
        <BookMetrics
          metrics={book.metrics}/>
      }
      <p>Average Google Rating: {book.google_average_rating}</p>
      <p>Number of Google Ratings: {book.rating_count}</p>
      <AddBookToShelfForm
        book={book}
        userShelves={user.shelves}
        renderPage={renderPage}
        setRenderPage={setRenderPage}/>
      <NewReviewForm
        bookId={book.id}
        userId={user.id}
        setUserHasReviewed={setUserHasReviewed}
        renderPage={renderPage}
        setRenderPage={setRenderPage}
        handleUpdate={handleUpdate}/>
      <br></br>
      {book.metrics &&
        <p>Number of users currently reading: {book.metrics.currently_reading_count}</p>
      }
      <h1>My Reviews</h1>
      {userHasReviewed && renderUsersReviews()}
      <h1>Friend's Activities</h1>
      <FriendActivity
        followedUsersReviews={book.followed_users_reviews}
      />
      <h1>Community Reviews</h1>
    </div>
  )
}

export default BookShow;