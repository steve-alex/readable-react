import React from 'react'
import { Rating } from 'semantic-ui-react'
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
    <div>
      {timeline.posts &&
        timeline.posts.map(post => {
          return createPostComponent(post)
        })
      }
    </div>
  )
}

export default TimelineContainer;