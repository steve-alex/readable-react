import React from 'react'
import CommentComponent from '../components/Comment.js'
import { Comment, Form, Button} from 'semantic-ui-react'

const CommentsContainer = ( {comments} ) => {
  return (
      <div>
        <Comment.Group>
          {
            comments.map(comment => {
              return <CommentComponent comment={comment}/>
            })
          }
        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
        </Comment.Group>
    </div>
  )
}

export default CommentsContainer;