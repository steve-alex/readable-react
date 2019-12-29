import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import { ReviewBanner } from '../components/banners/ReviewBanner';
import './containers.scss'
import { LikesPanel } from '../components/panels/LikesPanel';
import { CommentsContainer } from './CommentsContainer';

export const BookShowReviewContainer = ( {review} ) => {

  if (review) {
    return(
      <Card fluid>
        <ReviewBanner
          review={review}/>
        <p className="bookShowReviewContent">{review.content}</p>
        <LikesPanel
          likes={review.likes}
          review={review}/>
        <CommentsContainer
          review={review}
          visible={false}/>
      </Card>
    )
  }

}