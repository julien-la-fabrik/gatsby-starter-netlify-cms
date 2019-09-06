import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export const Gallery = ({ content }) => {
  console.log(content);
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="">Gallery</h2>
        <div className="uk-child-width-1-3@m uk-grid" uk-lightbox="animation: slide">
          {
            content.images.map((image, index) => (

              <div key={"section-img-" + index}>
                <a className="uk-inline" href={image.childImageSharp.fluid.src}>
                  <PreviewCompatibleImage imageInfo={image} />
                </a>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default Gallery
