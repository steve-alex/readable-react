import React, { useEffect, useState } from 'react'
import UserShelf from './UserShelf'

const UserShelves = ( {shelves} ) => {
  return (
    <div>
      <h1>Shelves</h1>
      {shelves && 
        Object.keys(shelves).map((key, index) => {
          let shelf = shelves[key]
          return <UserShelf
                    shelfName={key}
                    shelf={shelf}/>
        })
      } 
    </div>
  )
}

export default UserShelves;