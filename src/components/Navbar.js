import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"


const Navbar = ( {userId} ) => {
  const [activeItem, setActiveItem] = useState('/home')
  const history = useHistory();

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
    handleRedirect()
  }

  const handleRedirect = () => {
    if (activeItem === "home" || activeItem === "search") {
      history.push(`/${activeItem}`)
    } else {
      history.push(`/users/${userId}`)
    }
  }

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name={`Profile`}
        active={activeItem === `Profile`}
        onClick={handleItemClick}
      />
    </Menu>
  )
}

export default Navbar;