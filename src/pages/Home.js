import React, { useState, useEffect } from 'react';

const Home = ({ user }) => {

  const renderUserItems = () => {
    if (user) {
      console.log(user.data)
    }
  }

  return (
    <> 
      <h1>Home page</h1>
      {renderUserItems()}
    </>
  )
}

export default Home;