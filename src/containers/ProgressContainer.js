import React, { useEffect, useState } from 'react'
import ProgressBanner from '../components/ProgressBanner'
import ProgressContentContainer from './ProgressContentContainer'
import LikesBanner from '../components/LikesBanner.js'
import CommentsContainer from '../containers/CommentsContainer.js'

const ProgressContainer = ( {progress} ) => {
  return (
    <div>
      <ProgressBanner
        progress={progress}/>
      <ProgressContentContainer
        progress={progress}/>
      <LikesBanner
        likes={progress.likes}/>
      <CommentsContainer
        comments={progress.comments}
      />
    </div>
  )
}

export default ProgressContainer;