import React from 'react'

export const Spotlight = ({ content }) => {
    content.cssclass=content.cssclass||'';
    content.cssclass=content.cssclass+' uk-section'
    return (
      <section className={content.cssclass} id={content.cssid}>
      <div className={content.container === "full" ? 'uk-width-1-1' : "uk-container"}>
        <h2>{content.header}</h2>
        <p>
          {content.body}
        </p>
      </div>
    </section>
  )
}
export default Spotlight
