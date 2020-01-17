import React, { useState, useEffect } from 'react'
import '../../pages/homePage.scss'

export const UserShowCurrentlyReadingPanel = ( {currentlyReading} ) => {
  return (
    <div className="userCurrentlyReading">
      <h1>Currently Reading</h1>
      {currentlyReading &&
        currentlyReading.map(book => {
          return (
            <div className="currentlyReadingBook">
              <img src={book.image_url} alt={book.title}></img>
              
            </div>
          )
        })
      }
    </div>
  )
}