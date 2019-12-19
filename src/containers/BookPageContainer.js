import React, { } from 'react';
import { Route } from "react-router-dom"
import BookShow from '../components/BookShow.js'

const BookPageContainer = ( {user, match} ) => {
  
  return (
    <div>
      <Route
        path={`${match.url}/:bookId`}
        render={routerProps => {
          return <BookShow
                    user={user}
                    {...routerProps}
                  />
        }}
      />
    </div>
  )
}

export default BookPageContainer;