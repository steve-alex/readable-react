import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { CurrentlyReadingBookPanel } from "../panels/CurrentlyReadingBookPanel.js";
import { Button } from "semantic-ui-react";
import API from "../../adapters/api.js";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../pages/homePage.scss";

export const CurrentlyReadingCarousel = ({
  currentlyReading,
  checkFinishedReading
}) => {
  const [bookToUpdate, setBookToUpdate] = useState(undefined);
  const [pageToUpdate, setPageToUpdate] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = currentlyReading.length || 1;

  useEffect(() => {
    setBookToUpdate(currentlyReading[0].copy_id);
    setPageToUpdate(getCurrentPage());
  }, []);

  const createUpdate = (currentBookPage, pageCount) => {
    API.createUpdate(bookToUpdate, currentBookPage).then(
      checkFinishedReading(bookToUpdate, pageCount, pageToUpdate)
    );
  };

  const getCurrentPage = () => {
    if (currentlyReading[currentSlide].updates[0]) {
      return currentlyReading[currentSlide].updates[0].page_number;
    } else {
      return 0;
    }
  };

  const setCurrentBook = index => {
    let copy_id = currentlyReading[index].copy_id;
    setBookToUpdate(copy_id);
  };

  const getPageToUpdate = index => {
    if (currentlyReading[index].updates[0]) {
      return currentlyReading[index].updates[0].page_number;
    } else {
      return 0;
    }
  };

  const handleBackClick = e => {
    e.preventDefault();
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
      setCurrentBook(currentSlide - 1);
      setPageToUpdate(getPageToUpdate(currentSlide - 1));
    }
  };

  const handleNextClick = e => {
    e.preventDefault();
    if (currentSlide === totalSlides - 1) {
      setCurrentSlide(currentSlide);
    } else {
      setCurrentSlide(currentSlide + 1);
      setCurrentBook(currentSlide + 1);
      setPageToUpdate(getPageToUpdate(currentSlide + 1));
    }
  };


  return (
    <div className="currentlyReadingCarousel">
      <Button
        color="blue"
        icon="left chevron"
        inverted
        className="backButton"
        onClick={e => handleBackClick(e)}
      />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={29}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      >
        <Slider
          onClick={e => {
            if (e.target.tagName === "INPUT") {
              e.target.focus();
            }
          }}
        >
          {currentlyReading &&
            currentlyReading.map((book, index) => {
              return (
                <Slide index={index} key={book.title}>
                  <CurrentlyReadingBookPanel
                    index={index}
                    book={book}
                    setPageToUpdate={setPageToUpdate}
                    setCurrentBook={setCurrentBook}
                    createUpdate={createUpdate}
                  />
                </Slide>
              );
            })}
        </Slider>
      </CarouselProvider>
      <Button
        color="blue"
        inverted
        icon="right chevron"
        className="nextButton"
        icon="right chevron"
        onClick={e => handleNextClick(e)}
      />
    </div>
  );
};
