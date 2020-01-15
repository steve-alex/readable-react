import React, { useEffect, useState } from "react";
import API from "../adapters/api.js";
import { Menu } from "semantic-ui-react";
import { UserInformationPanel } from "../components/panels/UserInformationPanel.js";
import { UserShelvesPreviewPanel } from "../components/panels/UserShelvesPreviewPanel.js";
import { UserGenreMatch } from "../components/panels/UserGenreMatch.js";
import { UserBooksInCommonPanel } from "../components/panels/UserBooksInCommonPanel.js";
// import { UserShowCurrentlyReadingPanel } from "../components/panels/UserShowCurrentlyReadingPanel.js";
import { UserShelvesContainer } from "../containers/UserShelvesContainer.js";
import { TimelineContainer } from "../containers/TimelineContainer";
import './userProfile.scss'

export const UserPage = ({ match }) => {
  const [profile, setProfile] = useState(undefined);
  const [selectedTab, setSelectedTab] = useState("profile");

  useEffect(() => {
    API.getUserProfile(match.params.userId).then(resp =>
      setProfile(resp.profile)
    );
  }, []);

  const handleItemClick = (e, { name }) => {
    setSelectedTab(name);
  };

  return (
    <div>
      {profile && (
        <div>
          <UserInformationPanel
            user={profile.user}
            userFollows={profile.user_follows}
            followObject={profile.follow_object}
          />
          <Menu attatched="top" tabular>
            <Menu.Item
              name="profile"
              active={selectedTab === "profile"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="posts"
              active={selectedTab === "posts"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="shelves"
              active={selectedTab === "shelves"}
              onClick={handleItemClick}
            />
          </Menu>
          {/* <UserFavourites
            favouriteGenres={profile.favourite_genres}
            favouriteAuthors={profile.favourite_authors}/> */}
          {selectedTab === "profile" && (
            <div>
              <UserGenreMatch genreMatch={profile.genre_match} />
              <UserShelvesPreviewPanel shelves={profile.shelves} />
              <UserBooksInCommonPanel booksInCommon={profile.books_in_common} />
              {/* {profile.updates_by_copy && 
              <UserShowCurrentlyReadingPanel
              currentlyReading={profile.updates_by_copy}
              userId={profile.user.id}/>
            } */}
            </div>
          )}
          {selectedTab === "posts" && (
            <TimelineContainer timeline={profile.posts} commentsHidden={true} />
          )}
          {selectedTab === "shelves" && (
            <UserShelvesContainer shelves={profile.shelves} />
          )}
        </div>
      )}
    </div>
  );
};