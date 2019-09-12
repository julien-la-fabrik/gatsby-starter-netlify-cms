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
  return (
    <section className="uk-section" id={content.style.id}>
      <div className={content.style.container}>
        <h2>{content.header}</h2>
        <div uk-grid="">
          {
            content.Cards.map((card, index) => (
              <div className="uk-width-1-2@s uk-width-1-3@m" key={"block-item-" + index}>
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
