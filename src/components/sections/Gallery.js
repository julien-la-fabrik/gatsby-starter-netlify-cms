import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

const GetimgUrl = (imageInfo) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return image.childImageSharp.fluid.src;
  }

  if (!!childImageSharp) {
    return childImageSharp.fluid.src;
  }

  if (!!image && typeof image === 'string') {
    return image;
  }

  return '';
}

export const Gallery = ({ content }) => {
  // console.log(content.images);

  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="">Gallery</h2>
        <div uk-grid="" className="uk-grid-medium" uk-lightbox="animation: slide">
          {
            content.images.map((image, index) => (
              <div className="uk-width-1-2@s uk-width-1-3@m  " key={"section-img-" + index}>
                <a href={GetimgUrl(image)}>
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
