import React from 'react'


export const CardBlock = ({ content }) => {
  console.log(content);
  return (
    <div className="uk-width-1-2@s uk-width-1-3@m">
      <div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">{content.title}</h3>
        <p>
          {content.body}
        </p>

      </div>
    </div>
  )
}
export default CardBlock
