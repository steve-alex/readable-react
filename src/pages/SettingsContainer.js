import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { UserUpdateForm } from "../forms/UserUpdateForm.js";
import { ShelfUpdateForm } from "../forms/ShelfUpdateForm.js";
import "./settings.scss";

export const SettingsContainer = ({ user, match }) => {
  const [activeItem, setActiveItem] = useState("Update Shelves");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div className="settingsContainer">
      <Menu className="settingsMenu" fluid vertical tabular>
        <Menu.Item
          name="Update Shelves"
          active={activeItem === "Update Shelves"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Account Settings"
          active={activeItem === "Account Settings"}
          onClick={handleItemClick}
        />
      </Menu>
      <div className="settingsDisplay">
        {activeItem === "Update Shelves" ? (
          <ShelfUpdateForm user={user} match={match} />
        ) : (
          <UserUpdateForm user={user} match={match} />
        )}
      </div>
    </div>
  );
};
