import React, { useState, useEffect } from 'react'
import { UserComment } from '../components/content/UserComment.js'
import { NewCommentForm } from '../forms/NewCommentForm.js'
import { HideCommentsButton } from '../components/buttons/HideCommentsButton.js'
import { Comment, Form, Button, Container } from 'semantic-ui-react'
import API from '../adapters/api.js'
import "./containers.scss"

export const CommentsContainer = ( {progress, review, commentsHidden} ) => {
  const [comments, setComments] = useState([])
  const [commentsVisible, setCommentsVisible] = useState(undefined)
  const post = progress || review
  const postType = progress ? "Progress" : "Review"

  useEffect(() => {
    if (commentsHidden) {
      setCommentsVisible(false)
    } else {
      setCommentsVisible(true)
    }

    API.getPostComments(post, postType)
      .then(resp => setComments(resp.comments.comments))
      .catch(console.log)
  }, [])

  return (
    <>
      <HideCommentsButton
        commentsVisible={commentsVisible}
        setCommentsVisible={setCommentsVisible}/>
      {commentsVisible &&
        <div className="">
          <Comment.Group>
            {comments && 
              comments.map(comment => {
                return <UserComment key={comment.id} comment={comment}/>
              })
            }
          </Comment.Group>
      
          <NewCommentForm
            postType={postType}
            postId={post.id}
            comments={comments}
            setComments={setComments}
          />
        </div>
      }

    </>
  )
}