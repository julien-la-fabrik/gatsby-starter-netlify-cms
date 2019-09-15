import React from 'react'

export const Spotlight = ({ content }) => {
  return (
    <section className={content.style.class+" uk-section"} id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}
        <p>
          {content.body}
        </p>
      </div>
    </section>
  )
}
export default Spotlight
