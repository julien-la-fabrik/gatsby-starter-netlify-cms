import React from 'react'
import Carousel from './Carousel'
import SliderHero from './SliderHero'
import Spotlight from './Spotlight'
import Slider from './Slider'
import Gallery from './Gallery'
import Columns from './Columns'
import Accordion from './Accordion'

const Sections= {
  Carousel, SliderHero, Spotlight, Slider, Gallery, Columns, Accordion
}

export const Section = ({ template, type, content }) => {
  const SectionItem = Sections[template];
  // console.log(allContent);
  if (SectionItem) {
    return <SectionItem content={content} />;
  }
  else {
    return (
      <section className="uk-section">

      </section>
    )
  }
}
export default Section
