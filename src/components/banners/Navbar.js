import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { useHistory, Redirect} from "react-router-dom"


export const Navbar = ( {userId, logout} ) => {
  const [activeItem, setActiveItem] = useState('/home')
  const history = useHistory();

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
    history.push(`/${name}`)
  }

  return (
    <Menu
      size="large"
      >
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        <Icon name="home" />
        {(activeItem === 'home') && <Redirect to="/home"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}>
        <Icon name="search" />
        {(activeItem === 'search') && <Redirect to="/search"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name="profile"
        active={activeItem === `profile`}
        onClick={handleItemClick}>
        <Icon name="user outline" />
      {(activeItem === 'profile') && <Redirect to={`/users/${userId}`}></Redirect>}
      </Menu.Item>
      <Menu.Item
        name='settings'
        active={activeItem === 'settings'}
        onClick={handleItemClick}>
        <Icon name="setting" />
        {(activeItem === 'settings') && <Redirect to="/settings"></Redirect>}
      </Menu.Item>
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