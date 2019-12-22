import React from 'react'
import { Progress } from 'semantic-ui-react'
import { match } from 'minimatch';

const DisplayUpdate = ( {update, pageCount} ) => {
  
  return (
    <div>

      {update && 
        <div>
          <Progress
            percent={Math.round((parseInt(update.page_number) * 100 / parseInt(pageCount)))}
            inverted
            color='violet'
            progress/>
          <h5>{update.created_at.slice(0, 10)}</h5>
        </div>
      }
    </div>
  )
}

export default DisplayUpdate;