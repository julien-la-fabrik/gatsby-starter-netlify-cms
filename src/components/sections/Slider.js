import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Slider = ({ content }) => {
  content.cssclass=content.cssclass||'';
  content.cssclass=content.cssclass+' uk-section'
  return (
    <section className={content.cssclass} id={content.cssid}>
      <div className={content.container === "full" ? 'uk-width-1-1' : "uk-container"}>
        <h2>{content.header}</h2>
        <div uk-slider="autoplay: true">
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />

                  <div className="uk-overlay-primary uk-position-cover">
                  <div className="uk-position-center uk-position-small uk-text-center uk-light">
                  <h2 className="uk-margin-remove">{image.title}</h2>
                  <p className="uk-margin-remove">{image.body}</p>
              </div>
              </div>
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
