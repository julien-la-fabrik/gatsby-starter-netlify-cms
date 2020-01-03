import React from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import CardBlock from '../blocks/CardBlock'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const SliderComp_old = ({ content }) => {
  var settings = {
    dots: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={content.style.class + " uk-section"} id={content.style.id}>
      <div className={content.style.container}>


                <Slider {...settings}>
            {
              content.images.map((image, index) => (
                <div key={"section-img-" + index}>
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
                </div>
              ))
            }
          </Slider>

      </div>
    </section>
  )
}
export const SliderComp = ({ content }) => {
  // console.log(content);
  return (
    <section className={content.style.class + " uk-section"} id={content.style.id}>
      <div className={content.style.container}>

        <div data-uk-slider="" className="uk-position-relative uk-visible-toggle uk-light">
          <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
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
          <span className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous="" data-uk-slider-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next="" data-uk-slider-item="next"></span>

        </div>

      </div>
    </section>
  )
}
export default SliderComp
