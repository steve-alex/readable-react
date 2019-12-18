import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from "react-router-dom"
import API from './adapters/api.js';
import MainContainer from './containers/MainContainer.js';
import WelcomeContainer from './containers/WelcomeContainer.js';

import paths from './paths.js';

const App = () => {
  const [user, setUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
    API.validate()
    .then(resp => {
      setUser(resp.user)
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
      {user ? (
        <Route path='/'
        render={() => {
          return <MainContainer user={user} setUser={user} logout={logout}/>
        }}
      />
      ) : (
        <Route path='/welcome'
        render={() => {
          return <WelcomeContainer user={user} setUser={setUser} logout={logout}/>
        }}
      />
      )}
    </div>
  );
}

export default App;