import React from 'react'


export const CardBlock = ({ content }) => {
  // console.log(content);
  return (
    <div className="">
      {//<div className="uk-card uk-card-default uk-card-body">
      }

      {content.title && (
        <h3 className="uk-card-title">{content.title}</h3>
      )}
      <p>
        {content.body}
      </p>

      {//</div>
      }
    </div>
  )
}
export default CardBlock
