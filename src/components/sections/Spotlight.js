import React from 'react'

export const Spotlight = ({ content }) => {
    content.cssclass = '';
    content.cssclass=content.cssclass+' uk-section'
    return (
      <section className="uk-section" id={content.style.id}>
      <div className={content.style.container}>
        <h2>{content.header}</h2>
        <p>
          {content.body}
        </p>
      </div>
    </section>
  )
}
export default Spotlight
