import React, { useState, useEffect } from 'react'
import { Rating, Card, Image } from 'semantic-ui-react'

export const ReviewBanner = ( {review} ) => {

  const user = review.user;

  return (
    <Card.Content>
        <Image floated="left" size="tiny" src={user.avatar}/>
          <Card.Header>{user.username} rated it</Card.Header>
          <Card.Meta><Rating
                        defaultRating={review.rating}
                        maxRating={5}
                        disabled/>
          </Card.Meta>
          <Card.Meta>{review.created_at.slice(0, 10)}</Card.Meta>
    </Card.Content>
  )
}


// <Card.Content>
// <Item.Group>
//   {
//     progress.updates.map(update => {
//       return (<Item>
//         <Item.Image size='tiny' src={update.image_url} />
//         <Item.Content verticalAlign='middle'>
//           <Item.Header as='a'>{update.title}</Item.Header>
//         </Item.Content>
//       </Item>
//       )
//     })
//   }
// </Item.Group>
// </Card.Content>