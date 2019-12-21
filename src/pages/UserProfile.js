import React, { useEffect, useState } from 'react'
import API from '../adapters/api.js'
import UserInformationPanel from '../components/UserInformationPanel.js'
import UserShelves from '../components/UserShelves.js'
import UserFavourites from '../components/UserFavourites.js'
import UserBooksInCommon from '../components/UserBooksInCommon.js'

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
          <UserShelves
            shelves={profile.shelves}/>
          <UserFavourites
            favouriteGenres={profile.favourite_genres}
            favouriteAuthors={profile.favourite_authors}/>
          <UserBooksInCommon
            booksInCommon={profile.books_in_common}/>
        </div>
      }
    </div>
  )
}

export default UserPage;