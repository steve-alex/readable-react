import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const UserShelfSlide = ( {shelfName, shelf} ) => {
  const [redirect, setRedirect] = useState(undefined)

  const renderImages = () => {
    return shelf.books_to_display.map(book => {
      return (
        <div className="userShelfItem">
          <img src={book.image_url}></img>
        </div>
      )
    })
  }

  return (
    <div className="userShelf">
      {renderImages()}
      <div className="userShelfName">
        <div className="userShelfButtons">
          <h3 className="text-hoverable">
            <span
              onClick={() => setRedirect(`/shelves/${shelf.shelf_id}`)}>
              {shelfName}
            </span>
          </h3>
        </div>
      </div>
      {redirect &&
        <Redirect to={redirect}/>
      }
    </div>
  )
}