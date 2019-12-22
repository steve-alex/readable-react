import React from 'react'
import DisplayUpdate from './DisplayUpdate'

const BookUpdate = ( {book} ) => {

  return (
    <div>
      <img src={book.image_url}></img>
      <h2>{book.title}</h2>
      <h5>{book.subtitle}</h5>
      <h5>{book.authors}</h5>
      {book.updates && 
        book.updates.map(update => {
          return <DisplayUpdate
                    update={update}
                    pageCount={parseInt(book.page_count)}/>
        })
      }
    </div>
  )
}

export default BookUpdate;