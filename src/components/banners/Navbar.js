import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory, Redirect} from "react-router-dom"


const Navbar = ( {userId, logout} ) => {
  const [activeItem, setActiveItem] = useState('/home')
  const history = useHistory();

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
    history.push(`/${name}`)
  }

  return (
    <Menu
      inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}>
        Home
        {(activeItem === 'home') && <Redirect to="/home"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}>
        Search
        {(activeItem === 'search') && <Redirect to="/search"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name={`profile`}
        active={activeItem === `profile`}
        onClick={handleItemClick}>
        Profile
      {(activeItem === 'profile') && <Redirect to={`/users/${userId}`}></Redirect>}
      </Menu.Item>
      {/* <Menu.Item
        name='settings'
        active={activeItem === 'settings'}
        onClick={handleItemClick}>
        Settings
        {(activeItem === 'settings') && <Redirect to="/settings"></Redirect>}
      </Menu.Item> */}
      {/* <Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={logout}>
        Log out
        {(activeItem === 'logout')}
      </Menu.Item> */}
    </Menu>
  )
}

export default Navbar;