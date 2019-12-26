import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'

export const ProgressBanner = ( {progress} ) => {
  return (
    <Card.Content>
      <Image floated='left' size='tiny' src={progress.user.avatar}/>
        <Card.Header>{progress.user.username} made progress</Card.Header>
        <Card.Meta>{progress.created_at.slice(0, 10)}</Card.Meta>
    </Card.Content>
  )
}