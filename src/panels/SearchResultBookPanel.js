import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import API from '../adapters/api.js';


const SearchResultBookPanel = ( {book, instanceToRender, setInstanceToRender} ) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    API.findOrCreateBook(book)
      .then((resp) => setInstanceToRender(resp.book.id))
      .then(() => setClicked(true))
  }

  return (
    <div>
      <img src={book.image_url}></img>
      <a onClick={handleClick}>{book.title}</a>
      {clicked && 
        <Redirect to={`/books/${instanceToRender}`}/>
      }
      <p>{book.subtitle}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <p>Page count: {book.page_count}</p>
      <p>Google average rating: {book.google_average_rating}</p>
      <p>Google rating count: {book.rating_count}</p>
    </div>
  )
  
}

export default SearchResultBookPanel;