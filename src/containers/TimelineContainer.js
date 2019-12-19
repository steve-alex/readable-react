import React from 'react'
import { Rating } from 'semantic-ui-react'

const TimelineContainer = ( {timeline} ) => {

  const renderComments = (post) => {
    // console.log(post.comments)
    // post.comments.map(comment => {
    //   return (
    //     <>
    //       <h4>{comment.user.username}</h4>
    //     </>
    //   )
    // })
  }

  return (
    <>
      {
        timeline.timeline_posts.map(post => {
        return (
          <>
            <p>{post.user.username}</p>
            <Rating
              icon="star"
              defaultRating={post.rating}
              maxRating={5}
              disabled
            />
            <p>{post.created_at.slice(0, 10)}</p>
            <h2>{post.book.title}</h2>
            <h5>{post.book.subtitle}</h5>
            <img src={post.book.image_url}></img>
            <p>{post.book.description}</p>
            <p>Page Count: {post.book.page_count}</p>
            <p>{post.content}</p>
            <h2>Comments</h2>
            {/* {post.comments[0] &&
              renderComments()} */}
            {post.comments[0] &&
              post.comments.map(comment => {
                return (
                  <>
                    <h4>{comment.user.username}</h4>
                    <h4>{comment.created_at.slice(0, 9)}</h4>
                    <p>{comment.content}</p>
                  </>
                )
              })
            }
          </>
        )
      })
      }
    </>
  )
}

export default TimelineContainer;