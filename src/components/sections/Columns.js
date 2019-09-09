import React from 'react'


export const Columns = ({ content }) => {
  // console.log(content);
  return (
    <section className="uk-section" id={content.cssid}>
      <div className={content.container === "full" ? 'uk-width-1-1' : "uk-container"}>
        <h2>{content.header}</h2>
        <div uk-grid="">
          {
            content.cards.map((card, index) => (
              <div className="uk-width-1-2@s uk-width-1-3@m" key={"section-cards-" + index}>
                <div className="uk-card uk-card-default uk-card-body">
                  <h3 className="uk-card-title">{card.title}</h3>
                  <p>
                    {card.body}
                  </p>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default Columns
