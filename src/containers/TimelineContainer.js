import React from 'react'
import { Rating, Card } from 'semantic-ui-react'
import ReviewContainer from '../containers/ReviewContainer.js'
import ProgressContainer from '../containers/ProgressContainer.js'

const TimelineContainer = ( {timeline} ) => {

  const createPostComponent = (post) => {
    let postType = Object.keys(post)[0]
    if (postType === "review") {
      return <ReviewContainer review={post.review}/>
    } else {
      return <ProgressContainer progress={post.progress}/>
    }
  }

  return (
    <Card.Group>
      {timeline.posts &&
        timeline.posts.map(post => {
          return createPostComponent(post)
        })
      }
    </Card.Group>
  )
}

export default TimelineContainer;