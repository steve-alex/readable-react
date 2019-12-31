import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { CurrentlyReadingBookPanel } from '../panels/CurrentlyReadingBookPanel.js'
import 'pure-react-carousel/dist/react-carousel.es.css';

export const GetReadingCarousel = () => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
      >
        <Slider
          onClick={e => {
            if (e.target.tagName === "INPUT") {
              e.target.focus()
            }
          }}
        >
          <Slide index={1}>
            <br></br>
            <h2>Welcome to Readable!</h2>
            <h4>The social network for readers</h4>
          </Slide>
          <Slide index={2}>
            <br></br>
            <h2>Get started by searching for a book</h2>
            <h4>Add it to your currently reading to track your progress</h4>
          </Slide>
          <Slide index={3}>
            <br></br>
            <h2>Follow your friends to keep up to date with them</h2>
            <h4>Happy reading!</h4>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  )
}