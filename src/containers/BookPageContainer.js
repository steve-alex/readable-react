import React, { } from 'react';
import { Route } from "react-router-dom"
import BookShow from '../components/BookShow.js'

const BookPageContainer = ( {instanceToRender, setInstanceToRender, user, match} ) => {
  
  return (
    <div>
      <Route
        path={`${match.url}/:bookid`}
        render={routerProps => {
          return <BookShow
                    {...routerProps}
                    instanceToRender={instanceToRender}
                    setInstanceToRender={setInstanceToRender}
                    user={user}
                  />
        }}
      />
    </div>
  )
}

export default BookPageContainer;