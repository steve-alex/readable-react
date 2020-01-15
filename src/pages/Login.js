import React, { useState, useEffect } from 'react'
import { Route, useHistory, Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import API from '../adapters/api.js';
import paths from '../paths.js';



const Login = ( {setUser, setMessage} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    API.login({ email, password })
      .then(user => {
        setUser(user)
        history.push(paths.HOME)
      })
      .catch(errors => {
        setErrors(errors)
        setMessage(errors)
      })
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
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
        <Button type='submit'>Submit</Button>
      </Form>
      <Link to="/welcome/signup">
        <p>Register a new account</p>
      </Link>
    </>
  )
}

export default Login;