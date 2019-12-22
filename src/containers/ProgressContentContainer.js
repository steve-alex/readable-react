import React from 'react'
import BookUpdate from '../components/BookUpdate.js'

const ProgressContentContainer = ( {progress} ) => {
  return (
    <div>
      {progress.updates &&
        progress.updates.map(book => {
          return <BookUpdate book={book}/>
        })
      }
    </div>
  )
}

export default ProgressContentContainer;