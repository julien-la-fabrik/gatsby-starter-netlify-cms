import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import CardBlock from '../blocks/CardBlock'

export const Carousel = ({ content }) => {
  return (
    <section className={content.style.class + " uk-section"} id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slideshow="animation: pull">

          <ul className="uk-slideshow-items">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
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

          </ul>

          <span className="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous="" data-uk-slideshow-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next="" data-uk-slideshow-item="next"></span>

        </div>
      </div>
    </section>
  )
}
export default Carousel
