import React from 'react'
import Sections from './sections'


export const Section = ({ type, content }) => {
  console.log(Sections);
  const SectionItem = Sections[type];

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

