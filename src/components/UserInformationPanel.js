import React, { useEffect, useState } from 'react'
import FollowButton from '../buttons/FollowButton.js'

const UserInformationPanel = ( {user, userFollows, followObject} ) => {
  // const user = profile.user;
  // const followObject = profile.followObject

  return(
    <div>
      <h1>{user.username}</h1>
      <h2>{user.city}</h2>
      <p>{user.about}</p>
      <p>Followers {user.follower_count}</p>
      <p>Following: {user.following_count}</p>
      <p>Books: {user.book_count}</p>
      <FollowButton
        followObject={followObject}
        userId={user.id}/>
    </div>
  )
}

export default UserInformationPanel;