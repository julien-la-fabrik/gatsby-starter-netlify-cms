import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const SliderHero = ({ content }) => {
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2>{content.header}</h2>
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull">

          <ul className="uk-slideshow-items">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
                </li>
              ))
            }

          </ul>

          <span className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="" uk-slideshow-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="" uk-slideshow-item="next"></span>

        </div>
      </div>
    </section>
  )
}
export default SliderHero
