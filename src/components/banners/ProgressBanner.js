import React, { useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Redirect, useHistory } from 'react-router-dom'
import { parseDate } from '../../hooks/datetime.js'
import './banners.scss'

export const ProgressBanner = ( {progress} ) => {
  const [userClicked, setUserClicked] = useState(false)
  const history = useHistory()
  const user = progress.user;

  const handleUserClick = () => {
    setUserClicked(true)
    history.push(`/users/${user.id}`)
  }

  return (
    <Card.Content>
      <Image
        className="image-hoverable"
        onClick={() => handleUserClick()}
        floated="left"
        size="tiny"
        src={progress.user.avatar}/>
        <Card.Header>
          <div className="post-header-metadata">
            <div></div>
            <div className="post-header-row-1">
              <div className="post-username">
                <p className="text-hoverable"><span onClick={(e) => handleUserClick()}>
                  {user.username}
                </span> made progress </p>
              </div>
            </div>
            <div></div>
            <div className="post-created-at">
              {parseDate(progress.created_at)}
            </div>
          </div>
      </Card.Header>
      {userClicked &&
            <Redirect to={`/users/${user.id}`} />}
    </Card.Content>
  )
}