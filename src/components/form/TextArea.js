import React from 'react'

export const TextArea = ({ content }) => {
  // console.log(content);
  content.cssclass=content.cssclass || "";
  content.cssclass = content.cssclass + " uk-margin";
  return (
    <div className={content.cssclass}>
    <label className="uk-form-label">{content.title}</label>
    <div className="uk-form-controls">
      <textarea className="uk-textarea" rows="5" placeholder={content.placeholder}></textarea>
    </div>
    </div>
      )
    }
export default TextArea