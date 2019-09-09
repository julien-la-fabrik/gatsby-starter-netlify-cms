import React from 'react'

export const Text = ({ content, onChange }) => {
  content.cssclass = content.cssclass || "";
  let cssclass = content.cssclass + " uk-margin";
  return (
    <div className={cssclass}>
      <label className="uk-form-label" htmlFor={content.name}>{content.title}</label>
      <div className="uk-form-controls">
        <input name={content.name} id={content.name} className="uk-input" type="text" placeholder={content.placeholder} onChange={onChange} />
      </div>
    </div>
  )
}
export default Text
