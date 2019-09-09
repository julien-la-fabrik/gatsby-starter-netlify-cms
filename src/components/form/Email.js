import React from 'react'

export const Email = ({ content }) => {
  // console.log(content);
  content.cssclass = content.cssclass || "";
  content.cssclass = content.cssclass + " uk-margin";
  return (
    <div className={content.cssclass}>
      <label className="uk-form-label" for={content.name}>{content.title}</label>
      <div className="uk-form-controls">
        <input name={content.name} id={content.name} className="uk-input" type="text" placeholder={content.placeholder} />
      </div>
    </div>
  )
}
export default Email
