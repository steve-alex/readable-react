import React, { useEffect, useState } from 'react'
import { ReviewBanner } from '../components/banners/ReviewBanner.js'
import { LikesPanel } from '../components/panels/LikesPanel.js'
import { ReviewContent } from '../components/content/ReviewContent.js'
import { CommentsContainer } from '../containers/CommentsContainer.js'
import { Item, Card} from 'semantic-ui-react'

const ReviewContainer = ( {review} ) => {
  if (review) {
    return (
      <Card fluid>
        <ReviewBanner
          review={review}/>
        <ReviewContent
          review={review}/>
        <LikesPanel
          likes={review.likes} review={review}/>
        <CommentsContainer
          review={review}
          visible={true}/>
      </Card>
    )
  } else {
    return (
      <></>
    )
  }

}

export default ReviewContainer;