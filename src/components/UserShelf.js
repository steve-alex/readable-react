import React, { useEffect, useState } from 'react'

const UserShelf = ( {shelfName, bookCount, imageUrls} ) => {

  const renderImages = () => {
    if (imageUrls) {
      return imageUrls.map(url => {
        return <img src={url}></img>
      })
    }
  }

  return (
    
    <div>
      <h3>{shelfName}</h3>
      <h5>Books: {bookCount}</h5>
      {renderImages()}
    </div>
  )
}

export default UserShelf;