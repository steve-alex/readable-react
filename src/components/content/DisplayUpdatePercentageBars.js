import React from 'react'
import { Progress } from 'semantic-ui-react'
import "./content.scss"

export const DisplayUpdatePercentageBars = ( {update, pageCount} ) => {
  
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
            <h5>{update.created_at.slice(0, 10)}</h5>
          </div>
        </div>
      }
    </div>
  )
}