import React from 'react'

export const Text = ({ content }) => {
  console.log(content);
  content.cssclass = content.cssclass || "";
  let cssclass = content.cssclass + " uk-margin";
  return (
    <div className={cssclass}>
      <label className="uk-form-label" >{content.title}</label>
      <div className="uk-form-controls">
        <input className="uk-input" type="text" placeholder={content.placeholder} />
      </div>
    </div>
  )
}
export default Text
