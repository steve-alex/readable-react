import React from 'react'
import { Item } from 'semantic-ui-react'
import { DisplayUpdatePercentageBars } from '../content/DisplayUpdatePercentageBars.js'

export const UpdatesForBookPanel = ( {book} ) => {

  return (
    <Item.Group>
      <img src={book.image_url}></img>
      <h2>{book.title}</h2>
      <h5>{book.subtitle}</h5>
      <h5>{book.authors}</h5>
      {book.updates && 
        book.updates.map(update => {
          return <DisplayUpdatePercentageBars
                    update={update}
                    pageCount={parseInt(book.page_count)}/>
        })
      }
    </Item.Group>
  )
}