import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import CardBlock from '../blocks/CardBlock'

export const Slider = ({ content }) => {
  // console.log(content);
  return (
    <section className={content.style.class+" uk-section"} id={content.style.id}>
      <div className={content.style.container}>

        <div uk-slider="" className="uk-position-relative uk-visible-toggle uk-light">
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
                  {(image.title || image.body || image.button) && (
                    <div className="uk-overlay-primary uk-position-cover">
                      <div className="uk-position-center uk-position-small uk-text-center uk-light">
                      <div className="uk-container">
                        <CardBlock content={image}/>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))
            }
          </ul>
          <span className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="" uk-slider-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="" uk-slider-item="next"></span>

        </div>

      </div>
    </section>
  )
}
export default Slider
