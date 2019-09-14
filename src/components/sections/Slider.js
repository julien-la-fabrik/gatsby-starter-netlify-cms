import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import CardBlock from '../Blocks/CardBlock'

export const Slider = ({ content }) => {
  content.cssclass = '';
  content.cssclass = content.cssclass + ' uk-section';
  console.log(content);
  return (
    <section className={content.style.class+" uk-section"} id={content.style.id}>
      <div className={content.style.container}>

        <div uk-slider="autoplay: true">
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
            {
              content.images.map((image, index) => (
                <li key={"section-img-" + index}>
                  <PreviewCompatibleImage imageInfo={image} />
                  {(image.title || image.body) && (
                    <div className="uk-overlay-primary uk-position-cover">
                      <div className="uk-position-center uk-position-small uk-text-center uk-light">
                        <CardBlock content={image}/>
                      </div>
                    </div>
                  )}
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
