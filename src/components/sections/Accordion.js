import React from 'react'
export const Accordion = ({ content }) => {
  return (
    <section className="uk-section" id={content.cssid}>
      <div className={content.container === "full" ? 'uk-width-1-1' : "uk-container"}>
        <h2>{content.header}</h2>

        <ul uk-accordion="">
          {
            content.cards.map((card, index) => (
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
