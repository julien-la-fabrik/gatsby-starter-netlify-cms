import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Carousel = ({ content }) => {
  content.cssclass = '';
  content.cssclass = content.cssclass + ' uk-section'
  return (
    <section className="uk-section" id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull">

          <ul className="uk-slideshow-items">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
                  <div className="uk-position-center uk-panel">
                    <h2 className="uk-margin-remove">{image.title}</h2>
                    <p className="uk-margin-remove">{image.body}</p>
                  </div>
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
export default Carousel
