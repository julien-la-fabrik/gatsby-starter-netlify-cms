import React from 'react'
import Sections from './sections'
// import allContent from "../hooks/allContent"


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
