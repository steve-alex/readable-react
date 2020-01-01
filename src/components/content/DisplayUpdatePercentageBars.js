import React from 'react'
import { Progress } from 'semantic-ui-react'
import "./content.scss"

export const DisplayUpdatePercentageBars = ( {update, pageCount, timeSinceUpload} ) => {
  
  const display = ((update.page_number > pageCount) ? pageCount : update.page_number)

  return (
    <div>
      {update && 
        <div className="progressBarPanel">
          <Progress
            value={display}
            total={pageCount}
            color='blue'
            progress="value"/>
          <div className="progressTime">
            <h5>{timeSinceUpload}</h5>
          </div>
        </div>
      }
    </div>
  )
}