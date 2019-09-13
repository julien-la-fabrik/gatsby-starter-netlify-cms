import React from 'react'
export const Accordion = ({ content }) => {
  content.cssclass = '';
  content.cssclass = content.cssclass + ' uk-section'
  return (
    <section className="uk-section" id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}

        <ul uk-accordion="">
          {
            content.Cards.map((card, index) => (
              <li key={"section-img-" + index}>
                {/* eslint-disable-next-line */}
                <a className="uk-accordion-title" href="#">{card.title}</a>
                <div className="uk-accordion-content">
                  <p>
                    {card.body}
                  </p>
                </div>
              </li>
            ))
          }

        </ul>

      </div>
    </section>
  )
}
export default Accordion
