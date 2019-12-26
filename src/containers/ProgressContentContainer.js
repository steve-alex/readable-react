import React from 'react'
import { Item } from 'semantic-ui-react'
import { UpdatesForBookPanel } from '../components/panels/UpdatesForBookPanel.js'

export const ProgressContentContainer = ( {progress} ) => {
  return (
    <Item.Group>
      {progress.updates &&
        progress.updates.map(book => {
          return (
            <Item>
              <UpdatesForBookPanel book={book}/>
            </Item>
          )    
        })
      }
    </Item.Group>
  )
}