import React from 'react'

const UserFavourites = ( {favouriteGenres, favouriteAuthors} ) => {

  return (
    <div>
      {favouriteGenres &&
        <h2>Favourite Genres</h2>
      }
      {favouriteGenres && 
        favouriteGenres.map(genre => {
          return (
            <p>{genre[0]}: {genre[1]}</p>
          )
        })
      }
      {favouriteAuthors &&
        <h2>Favourite Authors</h2>
      }
      {favouriteAuthors && 
        favouriteAuthors.slice(4).map(author => {
          return (
            <p>{author[0]}</p>
          )
        })
      }
    </div>
  )
}

export default UserFavourites;