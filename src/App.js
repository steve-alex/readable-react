import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory, Redirect } from "react-router-dom"
import Auth from "./pages/Auth.js"
import API from './adapters/api.js';
import Home from './pages/Home.js';
import paths from './paths.js';

const App = () => {
  const [user, setUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
    API.validate()
    .then(resp => {
      setUser(resp.user)
      history.push(paths.HOME)
    })
    .catch(() => {
      history.push(paths.LOGIN)
    })
  }, [])

  const logout = () => {
    API.logout();
    setUser(false);
    history.push(paths.LOGIN);
  };

  return (
    <div className="App">
      {user && <button onClick={logout}>log out</button>}
      <Route path="/auth">
        <Auth setUser={setUser}/>
      </Route>
      {
        user ? (
          <>
            <Route path="/">
              <Home user={user}/>
            </Route>
          </>
          ) : (
            <Redirect to={'/auth/login'} />
          )
      }
    </div>
  );
}

export default App;