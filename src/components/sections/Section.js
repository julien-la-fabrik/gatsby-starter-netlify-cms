import React from 'react'

export const Section = ({ type, content }) => {
  if (type == "carousel") {
    console.log(content);
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h2 className="">
            Carousel
        </h2>
          <div class="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="animation: pull">

            <ul class="uk-slideshow-items">
              {
                content.images.map((image, index) => (
                  <li key={"section-img-" + index}>
                    <img src={image} alt="" uk-cover />
                  </li>
                ))
              }

            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

          </div>
        </div>
      </section>
    )
  }
  if (type == "spotlight") {
    return (
      <section className="uk-section">
        <div className="uk-container">
          <h2 className="">
            spotlight
        </h2>
        </div>
      </section>
    )
  }
}
export default Section