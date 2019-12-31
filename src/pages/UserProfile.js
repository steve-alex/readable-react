import React, { useEffect, useState } from 'react'
import API from '../adapters/api.js'
import UserInformationPanel from '../components/panels/UserInformationPanel.js'
import { UserShelvesPanel } from '../components/panels/UserShelvesPanel.js'
import UserFavourites from '../components/UserFavourites.js'
import { UserGenreMatch } from '../components/panels/UserGenreMatch.js'
import { UserBooksInCommonPanel } from '../components/panels/UserBooksInCommonPanel.js'
import { UserShowCurrentlyReadingPanel } from '../components/panels/UserShowCurrentlyReadingPanel.js'

const UserPage = ( {match} ) => {
  const [profile, setProfile] = useState(undefined)

  useEffect(() => {
    API.getUserProfile(match.params.userId)
      .then(resp => setProfile(resp.profile))
  }, [])
  
  return (
    <div>
      {profile && 
        <div>
          <UserInformationPanel
            user={profile.user}
            userFollows={profile.user_follows}
            followObject={profile.follow_object}/>
          <UserGenreMatch
            genreMatch={profile.genre_match}/>
          <UserShelvesPanel
            shelves={profile.shelves}/>
          <UserBooksInCommonPanel
            booksInCommon={profile.books_in_common}/>

          <UserShowCurrentlyReadingPanel
            userId={profile.user.id}/>
          {/* <UserFavourites
            favouriteGenres={profile.favourite_genres}
            favouriteAuthors={profile.favourite_authors}/> */}
        </div>
      }
    </div>
  )
}

export default UserPage;