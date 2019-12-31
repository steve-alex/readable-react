import React, { useState, useEffect } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import API from '../adapters/api.js'


export const Signup = ( {setUser, setMessage} ) => {
  const [fullname, setFullname] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    API.signup( {fullname, username, email, password, passwordConfirmation} )
      .then(user => {
        setUser(user)
        history.push('/')
      })
      .catch(errors => {
        setErrors(errors)
        setMessage(errors)
      })
  }

  return (
    <>
      <h1>Sign up!</h1>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field>
          <label>Full Name</label>
          <input
            type='text'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder='Fullname'/>
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Fullname'/>
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
        </Form.Field>
        <Form.Field>
          <label>Password Confirmation</label>
          <input
            type='password'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder='Confirm Passowrd' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}