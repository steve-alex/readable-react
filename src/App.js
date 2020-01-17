import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { MainContainer } from "./containers/MainContainer.js";
import WelcomeContainer from "./containers/WelcomeContainer.js";
import API from "./adapters/api.js";
import paths from "./paths.js";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  useEffect(() => {
    API.validateUser()
      .then(resp => {
        setUser(resp.user);
      })
      .catch(errors => {
        setErrors(errors);
        history.push(paths.LOGIN);
      });
  }, []);

  const logout = () => {
    API.logout();
    setUser(false);
    history.push(paths.LOGIN);
  };

  return (
    <div className="App">
      {user ? (
        <Route
          path="/"
          render={() => {
            return <MainContainer user={user} logout={logout} />;
          }}
        />
      ) : (
        <Route
          path="/welcome"
          component={routerProps => {
            return (
              <WelcomeContainer
                {...routerProps}
                user={user}
                setUser={setUser}
                logout={logout}
              />
            );
          }}
        />
      )}
    </div>
  );
};

export default App;