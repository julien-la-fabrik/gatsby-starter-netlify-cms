import React from 'react'
import Blocks from '../blocks'
import {Accordion as UikitAccordion ,AccordionItem as UikitAccordionItem} from 'uikit-react'

const Block = ({ content }) => {
  // console.log(content);
  const BlockItem = Blocks[content.type];

  if (BlockItem) {
    return <BlockItem content={content} />;
  }
  else {
    return (
      <div>

      </div>
    )
  }
}

export const Accordion = ({ content }) => {

  return (
    <section className={content.style.class + " uk-section"} id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}

        <UikitAccordion>
          {
            content.Cards.map((card, index) => {
              let cardBlock = JSON.parse(JSON.stringify(card));
              cardBlock.title=""
              return(

              <li key={"section-img-" + index}>
                {/* eslint-disable-next-line */}
                <a className="uk-accordion-title" href="#">{card.title}</a>
                <div className="uk-accordion-content">
                  <div className={card.style ? card.style.class : ''} key={"block-item-" + index}>
                    <Block content={cardBlock} />
                  </div>
                </div>
              </li>
            )}
          )
          }

        </UikitAccordion>

      </div>
    </section>
  )
}
export default Accordion
