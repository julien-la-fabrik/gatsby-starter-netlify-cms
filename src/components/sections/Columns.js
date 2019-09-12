import React from 'react'
import Blocks from '../blocks'


const Block = ({ content }) => {
  console.log(content);
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
              <Block content={card} key={"block-item-" + index}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
export default Columns
