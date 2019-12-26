import React, { useEffect, useState } from 'react'
import { ProgressBanner } from '../components/banners/ProgressBanner'
import { ProgressContentContainer } from './ProgressContentContainer'
import { LikesPanel } from '../components/panels/LikesPanel.js'
import { CommentsContainer } from '../containers/CommentsContainer.js'
import { Card, Item } from 'semantic-ui-react'

const ProgressContainer = ( {progress} ) => {

  if (progress) {
    return (
      <Card fluid>
        <ProgressBanner
          progress={progress}/>
        <ProgressContentContainer
          progress={progress}/>
        <LikesPanel
          likes={progress.likes} progress={progress}/>
        <CommentsContainer
          progress={progress}
        />
      </Card>
    )
  } else {
    return (
      <></>
    )
  }
}

export default ProgressContainer;