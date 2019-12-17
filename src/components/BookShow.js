import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'
import API from '../adapters/api.js'

const BookShow = ( props ) => {
  const [book, setBook] = useState([])

  useEffect(() => {
    API.getBook(props.instanceToRender)
      .then(res => setBook(res.book.data))
  }, [])
  
  return (
      <div>
        <img src={`${book.image_url}`}></img>
        <h1>{book.title}</h1>
        <h2>{book.subtitle}</h2>
        <h4>{book.authors}</h4>
        <p>{book.description}</p>
        <p>Average Rating: {book.google_average_rating}</p>
        <p>Number of Ratings: {book.google_average_rating}</p>
        <br></br>
        <h1>Friend's Activities</h1>
        <h1>Community Reviews</h1>

      </div>
  )
}

export default BookShow;