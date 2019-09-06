import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const SliderHero = ({ content }) => {
  return (

      <div className="uk-width-1-1">
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull,ratio: false">

          <ul className="uk-slideshow-items" uk-height-viewport="">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} className="uk-height-1-1"/>
                </li>
              ))
            }

          </ul>

          <span className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="" uk-slideshow-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="" uk-slideshow-item="next"></span>

        </div>
      </div>
  )
}
export default SliderHero
