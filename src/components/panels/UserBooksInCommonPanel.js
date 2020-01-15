import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { BookDisplaySlide } from "./BookDisplaySlide.js";
import "pure-react-carousel/dist/react-carousel.es.css";

export const UserBooksInCommonPanel = ({ booksInCommon }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [booksToDisplay, setBooksToDisplay] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (booksInCommon === "Current User") {
      setCurrentUser(true);
    }
    createBooksDisplayArray(booksInCommon);
    setTotalSlides(Math.ceil(booksInCommon.length / 4));
  }, []);

  const createBooksDisplayArray = books => {
    let booksToDisplay = [];
    Array.from(booksInCommon).forEach((book, i) => {
      let index = Math.floor(i / 4);
      if (booksToDisplay[index]) {
        booksToDisplay[index].push(book);
      } else {
        booksToDisplay[index] = [];
        booksToDisplay[index].push(book);
      }
    });
    setBooksToDisplay(booksToDisplay);
  };

  const handleBackClick = e => {
    e.preventDefault();
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextClick = e => {
    e.preventDefault();
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  if (booksInCommon !== "Current User") {
    return (
      <div className="booksInCommonPanel">
        <h1 className="booksInCommonTitle">Books in Common</h1>
        <Button
          color="blue"
          icon="left chevron"
          inverted
          className="backButton"
          onClick={e => handleBackClick(e)}
        />
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={36}
            currentSlide={currentSlide}
            totalSlides={totalSlides}
          >
            <Slider>
            {booksToDisplay && 
              booksToDisplay.map((slide, index) => {
                return (
                  <Slide index={index}>
                    <BookDisplaySlide slide={slide} />
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
        <Button
          color="blue"
          inverted
          className="nextButton"
          icon="right chevron"
          onClick={e => handleNextClick(e)}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
