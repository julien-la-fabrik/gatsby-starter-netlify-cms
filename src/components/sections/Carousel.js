import React,{useEffect} from 'react'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import CardBlock from '../blocks/CardBlock'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Slideshow} from 'uikit-react'

export const Carousel_old = ({ content }) => {
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
        {content.title && (
          <h2>{content.title}</h2>
        )}

          <Slider {...settings}>
            {
              content.images.map((image, index) => (
                <div  className="uk-position-relative" key={"section-img-" + index}>
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
export const Carousel = ({ content }) => {

  return (
    <section className={content.style.class + " uk-section"} id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}
        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" >
        <Slideshow options="animation: pull;">
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


          <span className="uk-position-center-left uk-position-small uk-hidden-hover" data-uk-slidenav-previous="" data-uk-slideshow-item="previous"></span>
          <span className="uk-position-center-right uk-position-small uk-hidden-hover" data-uk-slidenav-next="" data-uk-slideshow-item="next"></span>
          </Slideshow>
        </div>
      </div>
    </section>
  )
}
export default Carousel
