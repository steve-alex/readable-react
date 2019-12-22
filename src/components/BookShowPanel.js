import React, { useState, useEffect } from 'react'

const BookShowPanel = ( {book} ) => {

  return (
    <div>
      <img src={`${book.image_url}`}></img>
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2>
      <h4>{book.authors}</h4>
      <p>{book.description}</p>
    </div>
  )
}

export default BookShowPanel;