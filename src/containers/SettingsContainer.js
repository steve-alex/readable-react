import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import UserUpdateForm from '../forms/UserUpdateForm.js';
import { ShelfUpdateForm } from '../forms/ShelfUpdateForm.js'

export const SettingsContainer = ( {user, match} ) => {
  const [activeItem, setActiveItem] = useState("shelves")

  const handleItemClick = (e, { name }) => {
    setActiveItem(name)
  }

  return(
    <div className="settingsContainer">
      <div className="settingsDisplay">
        {(activeItem === "shelves") ?
          <ShelfUpdateForm user={user} match={match}/>
          :
          <UserUpdateForm user={user} match={match}/>}
      </div>
      <Menu 
        className="settingsMenu"
        fluid vertical tabular>
          <Menu.Item
            name='shelves'
            active={activeItem === 'shelves'}
            onClick={handleItemClick}/>
          <Menu.Item
            name='Account Settings'
            active={activeItem === 'Account Settings'}
            onClick={handleItemClick}/>
      </Menu>
    </div>
  )
}