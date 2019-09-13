import React from 'react'
import ReactMarkdown from 'react-markdown';

export const CardBlock = ({ content }) => {
  // console.log(content);
  return (
    <div className="">
      {//<div className="uk-card uk-card-default uk-card-body">
      }

      {content.title && (
        <h3 className="uk-card-title">{content.title}</h3>
      )}
      <div>
      <ReactMarkdown source={content.body} />
      </div>

      {//</div>
      }
    </div>
  )
}
export default CardBlock
