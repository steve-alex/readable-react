import React, { useEffect, useState } from 'react';
import { Route, Link, Red, Redirect } from "react-router-dom"
import API from '../adapters/api.js'
import AddBookToShelfForm from '../forms/AddBookToShelfForm.js'
import SearchResultBookPanel from '../components/panels/SearchResultBookPanel.js'
import { Card } from 'semantic-ui-react'

export const BookSearchResult = ( {book, userShelves} ) => {

  return (
      <Card fluid color="teal">
        <SearchResultBookPanel
          book={book}
        />
        <AddBookToShelfForm
          book={book}
          userShelves={userShelves}
        />
      </Card>
  )
}