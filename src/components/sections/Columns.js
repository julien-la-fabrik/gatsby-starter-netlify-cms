import React from 'react'
import Blocks from '../blocks'


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


export const Columns = ({ content }) => {
  // console.log(content);
  content.cssclass = '';
  content.cssclass = content.cssclass + ' uk-section'
  // uk-width-1-2@s uk-width-1-3@m
  return (
    <section className={content.style.class+" uk-section"} id={content.style.id}>
      <div className={content.style.container}>
        {content.title && (
          <h2>{content.title}</h2>
        )}
        <div className="uk-flex uk-grid uk-child-width-expand@s">
          {
            content.Cards.map((card, index) => (
              <div className="" key={"block-item-" + index}>
                <Block content={card} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default Columns
