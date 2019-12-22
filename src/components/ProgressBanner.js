import React from 'react'

const ProgressBanner = ( {progress} ) => {
  return (
    <div>
      <img src={progress.user.avatar}></img>
      <h5>{progress.user.username} made progress</h5>
      <h5>{progress.created_at.slice(0, 10)}</h5>
    </div>
  )
}

export default ProgressBanner;