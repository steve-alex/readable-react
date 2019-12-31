import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import API from '../../adapters/api';


const FollowButton = ({followObject, userId, followerCount, setFollowerCount}) => {
  const [userFollows, setUserFollows] = useState(false)
  const [followId, setFollowId] = useState(undefined)
  const [errors, setErrors] = useState(undefined)

  useEffect(() => {
    if (followObject[0]) {
      setUserFollows(true)
      setFollowId(followObject[0].id)
    } else {
      setUserFollows(false)
    }
  }, [])

  const handleClick = () => {
    userFollows ?
    API.unfollowUser(followId)
      .then(res => handleResponse(res))
      .then(setFollowerCount(followerCount -= 1))
    :
    API.followUser(userId)
      .then(res => handleResponse(res))
      .then(setFollowerCount(followerCount += 1))

  }

  const handleResponse = (res) => {
    res.errors ?
    setErrors(res.errors)
    :
    setUserFollows(!userFollows)
    setFollowId(res.follow ? res.follow.id : undefined)
  }

  return (
    <div className="followButton">
      <Button
        onClick={handleClick}>{userFollows ? "Unfollow" : "Follow"}</Button>
    </div>
  )
}

export default FollowButton;