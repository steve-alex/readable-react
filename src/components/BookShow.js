import React, { useEffect, useState } from 'react';
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js';
import NewReviewForm from '../forms/NewReviewForm.js';

const BookShow = ( {match, instanceToRender, setInstanceToRender, user} ) => {
  const [book, setBook] = useState([])
  const [userHasReviewed, setUserHasReviewed] = useState(false)

  useEffect(() => {
    API.getBook(instanceToRender)
      .then(res => setBook(res.book))
      //Also make this check if a use has reviewed the book
  }, [])

  return (
    <div>
      <img src={`${book.image_url}`}></img>
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2>
      <h4>{book.authors}</h4>
      <p>{book.description}</p>
      <AddBookToShelfForm
        book={book}
        userShelves={user.shelves}/>
      <NewReviewForm
        bookId={book.id}
        userId={user.id}
        setUserHasReviewed={setUserHasReviewed}
      />
      <p>Average Rating: {book.google_average_rating}</p>
      <p>Number of Ratings: {book.google_average_rating}</p>
      <br></br>
      {userHasReviewed &&
        <h1>My Review</h1>
      }
      <h1>Friend's Activities</h1>
      <h1>Community Reviews</h1>
    </div>
  )
}

export default BookShow;