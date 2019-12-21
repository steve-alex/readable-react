import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'
import API from '../adapters/api';


const FollowButton = ({followObject, userId}) => {
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
    :
    API.followUser(userId)
      .then(res => handleResponse(res))
  }

  const handleResponse = (res) => {
    res.errors ?
    setErrors(res.errors)
    :
    setUserFollows(!userFollows)
    setFollowId(res.follow ? res.follow.id : undefined)
  }

  return (
    <div>
      <Button
        onClick={handleClick}>{userFollows ? "Unfollow" : "Follow"}</Button>
    </div>
  )
}

export default FollowButton;