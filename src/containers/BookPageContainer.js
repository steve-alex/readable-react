import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import paths from '../paths.js';
import Login from '../pages/Login.js'
import BookShow from '../components/BookShow.js'

const BookPageContainer = ( {instanceToRender, setInstanceToRender, user, match} ) => {

  useEffect(() => {
    //Render the book whose id you have stumbled upon
    return () => {
      //Wipe everything out
    };
  }, [])
  
  return (
      <div>
        <Route
          path={`${match.url}/:bookid`}
          render={routerProps => {
            return <BookShow
                      {...routerProps}
                      instanceToRender={instanceToRender}
                      setInstanceToRender={setInstanceToRender}
                    />
          }}
        />
      </div>
  )
}

export default BookPageContainer;