import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { BookDisplaySlide } from "../panels/BookDisplaySlide.js";
import { Redirect } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const UserShelfDisplayPanel = ({ shelfName, shelfId, books }) => {
  const [booksToDisplay, setBooksToDisplay] = useState(undefined);
  const [clicked, setClicked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (books) {
      createBooksDisplayArray();
      setTotalSlides(Math.ceil(books.length / 4));
    }
  }, []);

  const createBooksDisplayArray = () => {
    let booksToDisplay = [];
    Array.from(books).forEach((book, i) => {
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

  const getTotalSlides = () => {
    if (Math.floor(books.length / 4) % 1 !== 0) {
      return Math.floor(books.length / 4);
    } else {
      return Math.floor(books.length / 4) + 1;
    }
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

  return (
    <div className="userShelfDisplayPanel">
      <h1 className="booksInCommonTitle text-hoverable">
        <span onClick={() => setClicked(true)}>{shelfName}</span>
      </h1>
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
        totalSlides={getTotalSlides()}
      >
        <Slider>
          {booksToDisplay &&
            booksToDisplay.map(slide => {
              return (
                <Slide>
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
      {clicked && <Redirect to={`/shelves/${shelfId}`} />}
    </div>
  );
};
