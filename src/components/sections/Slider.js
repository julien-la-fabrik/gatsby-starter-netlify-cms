import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Slider = ({ content }) => {
  console.log(content.images);
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="">Slider</h2>
        <div uk-slider="autoplay: true">
          <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
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
