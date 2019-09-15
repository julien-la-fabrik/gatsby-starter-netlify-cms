import React from 'react'
import CardBlock from '../blocks/CardBlock'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return <img uk-cover="" src={image.childImageSharp.fluid.src} alt={alt} />
  }

  if (!!childImageSharp) {
    return <img uk-cover="" src={childImageSharp.fluid.src} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img uk-cover="" src={image} alt={alt} />

  return null
}


// const PreviewCompatibleImage2 = ({ imageInfo }) => {
//   const { alt = '', childImageSharp, image } = imageInfo
//
//   if (!!image && !!image.childImageSharp) {
//     return (
//       <Img uk-cover="" fluid={image.childImageSharp.fluid} alt={alt} />
//     )
//   }
//
//   if (!!childImageSharp) {
//     return <Img uk-cover="" fluid={childImageSharp.fluid} alt={alt} />
//   }
//
//   if (!!image && typeof image === 'string')
//     return <img uk-cover=""  src={image} alt={alt} />
//
//   return null
// }

export const SliderHero = ({ content }) => {
  // console.log(content);
  return (

    <div className="uk-width-1-1" id={content.style.id}>
      <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull,ratio: false">

        <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true">
          {
            content.images.map((image, index) => (
              <li key={"section-img-" + index}>
                <PreviewCompatibleImage imageInfo={image} className="uk-height-1-1" />
                {(image.title || image.body) && (
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
        <span className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="" uk-slideshow-item="previous"></span>
        <span className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="" uk-slideshow-item="next"></span>

      </div>
    </div>
  )
}
export default SliderHero
