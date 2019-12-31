import React, { useState, useEffect } from 'react'
import '../buttons/buttons.scss'

export const HideCommentsButton = ( {commentsVisible, setCommentsVisible} ) => {

  return(
    <p
      className="hideCommentsButton"
      onClick={() => setCommentsVisible(!commentsVisible)}>
      {commentsVisible ? "Hide Comments" : "Show Comments"}
    </p>
  )

}