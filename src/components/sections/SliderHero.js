import React,{useEffect} from 'react'
import CardBlock from '../blocks/CardBlock'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import {Slideshow} from 'uikit-react'

export const SliderHero = ({ content }) => {
  // console.log(content)

  return (

    <div className="uk-width-1-1 slider-hero" id={content.style.id}>
      <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1"  data-off-uk-height-viewport="offset-top: true">

        <Slideshow options="animation: pull,ratio: false">
          {
            content.images.map((image, index) => (
              <li key={"section-img-" + index} >
                <PreviewCompatibleImage imageInfo={image} className="uk-height-1-1" />
                {(image.title || image.body || image.button) && (
                  <div className="uk-overlay-primary uk-position-cover">
                    <div className="uk-position-center uk-position-small uk-text-center uk-light">
                      <div className="uk-container">
                        <CardBlock content={image} />
                      </div>
                    </div>
                  </div>
                )}

              </li>
            ))
          }
          </Slideshow>
        <span className="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous="" data-uk-slideshow-item="previous"></span>
        <span className="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next="" data-uk-slideshow-item="next"></span>

      </div>
    </div>
  )
}
export default SliderHero
