import React, { useState, useEffect } from 'react'
import RatingDistribution from '../RatingDistribution.js'
import './panels.scss'
import { Popup, Button, Rating } from 'semantic-ui-react'
import { NewReviewForm } from '../NewReviewForm.js'
// import { NewReviewForm } from '../components/forms/NewReviewForm.js'
import AddBookToShelfForm from '../../forms/AddBookToShelfForm.js';

const BookShowPanel = ( {book, user, setUserHasReviewed, submitReview} ) => {
  const metrics = book.metrics

  const getAverageRating = () => {
    let numberOfReviews = getNumberOfReviews()
    let sumOfRatings = getSumOfRatings()
    if (numberOfReviews === 0) {
      return "This book has not been reviewed yet"
    } else {
      let averageRating = Math.round((sumOfRatings / numberOfReviews)* 100) / 100
      return `Average: ${averageRating} out of 5`
    }
  }

  const getSumOfRatings = () => {
    let sumOfRatings = 0;
    for (const [key, value] of Object.entries(metrics.review_distribution)){
      if (key !== "review_count") {
        sumOfRatings += (parseInt(key) * value)
      }
    }
    return sumOfRatings;
  }

  const getNumberOfReviews = () => {
    return Object.values(metrics.review_distribution).reduce((a, b) => a + b, 0)
  }

  const renderCategories = () => {
    return book.categories.split(" ").map(category => {
      if (category !== "&") {
        return (
          <Button basic color={pickAColour()}>
            {category}
          </Button>
        )
      }
    })
  }

  const pickAColour = () => {
    const colors = ["green", "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown"]
    return colors[Math.floor(colors.length * Math.random())]
  }

  return (
    <>
      <div class="bookShowPanel">
        <img src={`${book.image_url}`}></img>
        <div class="bookShowText">
          <h2 class="bookShowPanelTitle">{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <h5>By {book.authors}</h5>
          {book.categories && 
            renderCategories()}

          <div class="averageRating">
              <Popup
                wide='very'
                trigger={<div>
                          <Rating
                            defaultRating={getAverageRating()}
                            maxRating={5}
                            disabled />
                          {getNumberOfReviews()} reviews
                         </div>}>
                <p className="averageRatingPopupBanner">{getAverageRating()}</p>
                <Popup.Content>
                  {book.metrics &&
                    <RatingDistribution 
                      reviewDistribution={book.metrics.review_distribution}/>}
                </Popup.Content>
              </Popup>
          </div>
          <div className="bookAction">
            <AddBookToShelfForm
              className="addBookToShelfForm"
              book={book}
              userShelves={user.shelves}
            />
            <NewReviewForm
              bookId={book.id}
              userId={user.id}
              setUserHasReviewed={setUserHasReviewed}
              submitReview={submitReview}/>
          </div>

        </div>
        <div class="bookShowDescription">
          <p>{book.description}</p>
        </div>
      </div>

    </>
  )
}

export default BookShowPanel;