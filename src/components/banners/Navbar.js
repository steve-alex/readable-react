import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { useHistory, Redirect } from "react-router-dom";
import './banners.scss'
import logo from './logo.png';

export const Navbar = ({ userId, logout }) => {
  const [activeItem, setActiveItem] = useState("/home");
  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    history.push(`/${name}`);
  };

  return (
    <div className="navbar">
      <div className="image">
        <img alt="increadable-logo" src={logo}></img>
      </div>
      <div></div>
      <Menu size="large" secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
          {activeItem === "home" && <Redirect to="/home"></Redirect>}
        </Menu.Item>
        <Menu.Item
          name="search"
          active={activeItem === "search"}
          onClick={handleItemClick}
        >
          Search
          {activeItem === "search" && <Redirect to="/search"></Redirect>}
        </Menu.Item>
        <Menu.Item
          name="profile"
          active={activeItem === `profile`}
          onClick={handleItemClick}
        >
          User
          {activeItem === "profile" && (
            <Redirect to={`/users/${userId}`}></Redirect>
          )}
        </Menu.Item>
        <Menu.Item
          name="settings"
          active={activeItem === "settings"}
          onClick={handleItemClick}
        >
          Settings
          {activeItem === "settings" && <Redirect to="/settings"></Redirect>}
        </Menu.Item>
        {/* <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={logout}>
          Log out
          {(activeItem === 'logout')}
        </Menu.Item> */}
      </Menu>
    </div>
  );
};
