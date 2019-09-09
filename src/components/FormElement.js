import React from 'react'
import FormElements from './form'

export const FormElement = ({ type, content, onChange }) => {
  const FormElement = FormElements[type];

  if (FormElement) {
    return <FormElement content={content} onChange={onChange} />;
  }
  else {
    return (
      <section className="uk-section">

      </section>
    )
  }
}
export default FormElement

