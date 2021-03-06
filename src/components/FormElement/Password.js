import React from 'react'

export const Password = ({ content }) => {
  // console.log(content);
  content.style.class = content.style.class || "";
  content.style.class = content.style.class + " uk-margin";
  return (
    <div className={content.style.class} id={content.style.id}>
      <label className="uk-form-label" htmlFor={content.name}>{content.title}</label>
      <div className="uk-form-controls">
        <input name={content.name} id={content.name} className="uk-input" type="text" placeholder={content.placeholder} />
      </div>
    </div>
  )
}
export default Password
