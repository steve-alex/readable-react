import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory, Redirect} from "react-router-dom"


const Navbar = ( {userId} ) => {
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
        onClick={handleItemClick}
      >
        Home
        {(activeItem === 'home') && <Redirect to="/home"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
      >
        Search
        {(activeItem === 'search') && <Redirect to="/search"></Redirect>}
      </Menu.Item>
      <Menu.Item
        name={`profile`}
        active={activeItem === `profile`}
        onClick={handleItemClick}
      >
        Profile
      {(activeItem === 'profile') && <Redirect to={`/users/${userId}`}></Redirect>}
      </Menu.Item>
    </Menu>
  )
}

export default Navbar;