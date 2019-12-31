import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { Item } from 'semantic-ui-react'
import { UpdatesForBookPanel } from '../components/panels/UpdatesForBookPanel.js'
import { DisplayUpdatePercentageBars } from '../components/content/DisplayUpdatePercentageBars'
import './containers.scss';
export const ProgressContentContainer = ( {progress} ) => {
  const [bookClicked, setBookClicked] = useState(false)

  const handleClick = (e) => {
    setBookClicked(true)    
  }

  return (
    <div className="progressContentContainer">
      {progress.updates &&
        progress.updates.map(book => {
          return (
            <div class="bookUpdatePanel">
              <div class="progressBookImage">
                <img
                  className="image-hoverable"
                  src={book.image_url}
                  onClick={(e) => handleClick(e)}></img>
              </div>
              <div class="bookUpdateMeta">
                <h2
                  className="text-hoverable"
                  onClick={(e) => handleClick(e)}><span>{book.title}</span></h2>
                <p>By {book.authors}</p>
                <p>Page Count: {book.page_count}</p>
              </div>
              <div class="bookUpdateBars">
                {book.updates && 
                  book.updates.map(update => {
                    return <DisplayUpdatePercentageBars
                              update={update}
                              pageCount={parseInt(book.page_count)}/>
                  })
                }
              </div>
              {bookClicked &&
                <Redirect to={`books/${book.book_id}`} />}
            </div>
          )    
        })
      }
    </div>
  )

}