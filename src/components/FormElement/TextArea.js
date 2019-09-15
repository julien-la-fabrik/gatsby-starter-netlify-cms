import React from 'react'

export const TextArea = ({ content, onChange }) => {
  // console.log(content);
  content.style.class = content.style.class || "";
  content.style.class = content.style.class + " uk-margin";
  return (
    <div className={content.style.class} id={content.style.id}>
      <label className="uk-form-label" htmlFor={content.name}>{content.title}</label>
      <div className="uk-form-controls">
        <textarea name={content.name} id={content.name} className="uk-textarea" rows="5" placeholder={content.placeholder} onChange={onChange}></textarea>
      </div>
    </div>
  )
}
export default TextArea
