import React, { useState, useEffect } from 'react'
import { UserShelfSlide} from './UserShelfSlide.js'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './panels.scss'

export const UserShelvesPanel = ( {shelves} ) => {
  const [totalSlides, setTotalSlides] = useState(undefined)

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
          totalSlides={totalSlides}>
          <Slider>
            {shelves &&
              Object.keys(shelves).map((key, index) => {
              let shelf = shelves[key]
              return (
                <Slide index={index}>
                  <UserShelfSlide
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