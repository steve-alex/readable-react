import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { BookDisplaySlide } from "./BookDisplaySlide.js";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./panels.scss";

export const UserBooksInCommonPanel = ({ booksInCommon }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [booksToDisplay, setBooksToDisplay] = useState(undefined);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (booksInCommon === "Current User") {
      setCurrentUser(true);
    }
    createBooksDisplayArray(booksInCommon);
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

  if (booksInCommon !== "Current User") {
    return (
      <div className="booksInCommonPanel">
        <h1 className="booksInCommonTitle">Books in Common</h1>
        {booksToDisplay && (
          <div className="booksInCommon">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
              currentSlide={currentSlide}
              totalSlides={Math.floor(booksInCommon.length / 4) + 1}
            >
              <Slider>
                {booksToDisplay.map((slide, index) => {
                  return (
                    <Slide index={index}>
                      <BookDisplaySlide
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        slide={slide}
                        totalSlides={Math.floor(booksInCommon.length / 4) + 1}
                      />
                    </Slide>
                  );
                })}
              </Slider>
            </CarouselProvider>
          </div>
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};
