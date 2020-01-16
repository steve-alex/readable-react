import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { UserShelfPreviewSlide } from "./UserShelfPreviewSlide.js";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export const UserShelvesPreviewPanel = ({ shelves }) => {
  const [totalSlides, setTotalSlides] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (shelves) {
      setTotalSlides(getTotalSlides());
    } else {
      setTotalSlides(1);
    }
  }, []);

  const getTotalSlides = () => {
    let userShelves = shelves;
    for (let shelf in userShelves) {
      if (!userShelves[shelf].books_to_display[0]) {
        delete userShelves[shelf];
      }
    }
    let shelvesWithBooksCount = Object.keys(userShelves).length
    return shelvesWithBooksCount
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
    <div className="shelvesPreviewPanel">
      <h1 className="shelfHeader">Shelves</h1>
      
      <Button
        color="blue"
        icon="left chevron"
        inverted
        className="backButton"
        onClick={e => handleBackClick(e)}
      />
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={43}
        totalSlides={totalSlides}
        currentSlide={currentSlide}
      >
        <Slider>
          {shelves &&
            Object.keys(shelves).map((key, index) => {
              let shelf = shelves[key];
              if (!!shelf.books_to_display[0]) {
                return (
                  <Slide index={index} key={key}>
                    <UserShelfPreviewSlide
                      currentSlide={currentSlide}
                      setCurrentSlide={setCurrentSlide}
                      totalSlides={totalSlides}
                      shelfName={key}
                      shelf={shelf}
                    />
                  </Slide>
                );
              }
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
};
