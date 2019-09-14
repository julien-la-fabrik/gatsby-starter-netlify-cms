import React from 'react'
import ReactMarkdown from 'react-markdown';
import Button from '../Button.js';

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
      {content.button && (
        <Button button={content.button}/>
      )}
      {//</div>
      }
    </div>
  )
}
export default CardBlock
