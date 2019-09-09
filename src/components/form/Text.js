import React from 'react'

export const Text = ({ content }) => {
  content.cssclass = content.cssclass || "";
  let cssclass = content.cssclass + " uk-margin";
  return (
    <div className={cssclass}>
      <label className="uk-form-label" for={content.name}>{content.title}</label>
      <div className="uk-form-controls">
        <input name={content.name} id={content.name} className="uk-input" type="text" placeholder={content.placeholder} />
      </div>
    </div>
  )
}
export default Text
