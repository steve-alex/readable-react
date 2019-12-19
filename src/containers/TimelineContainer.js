import React from 'react'
import { Rating } from 'semantic-ui-react'

const TimelineContainer = ( {timeline} ) => {

  return (
    <>
      {timeline.timeline_posts &&
        timeline.timeline_posts.map(post => {
          return (
            <>
              <p>{post.content}</p>
              <Rating
                icon="star"
                defaultRating={post.rating}
                maxRating={5}
                disabled/>
            </>
          )
        })
      }
    </>
  )
}

export default TimelineContainer;