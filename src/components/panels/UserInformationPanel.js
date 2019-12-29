import React, { useEffect, useState } from 'react'
import FollowButton from '../../components/buttons/FollowButton.js'
import { Card } from 'semantic-ui-react'

const UserInformationPanel = ( {user, userFollows, followObject} ) => {

  return(
    <div className="userInformationPanel">
      <h1 className="username">{user.username}</h1>
      <div className="userAvatar">
        <img src={`${user.avatar}`}></img>
      </div>
      <FollowButton
        followObject={followObject}
        userId={user.id}/>
      <div className="followerCount">
        <p>Followers</p>
        <p>{user.follower_count}</p>
      </div>
      <div className="followingCount">
        <p>Following</p>
        <p>{user.following_count}</p>
      </div>
      <div className="bookCount">
        <p>Books</p>
        <p>{user.book_count}</p>
      </div>
      <div className="userAbout">
        <p>{user.about}</p>
      </div>
      <h2>{user.city}</h2>
      
    </div>
  )
}

export default UserInformationPanel;