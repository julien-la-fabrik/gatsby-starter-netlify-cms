import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Slider = ({ content }) => {
  return (
    <section className="uk-section">
      <div className={content.container =="full" ? 'uk-width-1-1':"uk-container"}>
        <h2>{content.header}</h2>
        <div uk-slider="autoplay: true">
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </section>
  )
}
export default Slider
