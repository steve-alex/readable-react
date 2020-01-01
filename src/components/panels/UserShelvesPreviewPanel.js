import React, { useState, useEffect } from 'react'
import { UserShelfPreviewSlide} from './UserShelfPreviewSlide.js'
import { CarouselProvider, Slider, Slide,  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './panels.scss'

export const UserShelvesPreviewPanel = ( {shelves} ) => {
  const [totalSlides, setTotalSlides] = useState(undefined)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (shelves) {
      setTotalSlides(Object.keys(shelves).length)
    } else {
      setTotalSlides(1)
    }
  }, [])

  return (
    <div>
      <h1 className="shelfHeader"> Shelves</h1>
      {<CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={25}
          totalSlides={totalSlides}
          currentSlide={currentSlide}>
          <Slider>
            {shelves &&
              Object.keys(shelves).map((key, index) => {
              let shelf = shelves[key]
              return (
                <Slide index={index}>
                  <UserShelfPreviewSlide
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    totalSlides={totalSlides}
                    shelfName={key}
                    shelf={shelf}/>
                </Slide>
              )
              })
            }
          </Slider>
        </CarouselProvider>}
    </div>
  )
}