import React from 'react'

export const Spotlight = ({ content }) => {
  console.log(content);
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2>{content.header}</h2>
      </div>
    </section>
  )
}
export default Spotlight
