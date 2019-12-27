import React, { useState, useEffect } from 'react'
import './panels.scss'

const BookShowPanel = ( {book} ) => {

  return (
    <>
      <div class="bookShowPanel">
        <img src={`${book.image_url}`}></img>
        <div>
          <h1>{book.title}</h1>
          <h2>{book.subtitle}</h2>
          <h4>By {book.authors}</h4>
          <h4>Categories:  {book.categories}</h4>
        </div>
      </div>
      <p>{book.description}</p>
    </>
  )
}

export default BookShowPanel;