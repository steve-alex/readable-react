import React, { useState, useEffect} from 'react'
import { string } from 'postcss-selector-parser';

const UserBooksInCommon = ( {booksInCommon}) => {
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    if (booksInCommon === "Current User") {
      setCurrentUser(true)
    }
  })

  if (booksInCommon !== "Current User") {
    return (
      <div>
        <h2>Books in Common</h2>
        {booksInCommon.map(book => {
            return <img src={book.image_url}></img>
          })
        }
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default UserBooksInCommon;