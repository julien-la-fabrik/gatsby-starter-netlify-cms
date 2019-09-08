import React from 'react'
import FormElements from './form'

export const FormElement = ({ type, content }) => {
  const FormElement = FormElements[type];

  if (FormElement) {
    return <FormElement content={content} />;
  }
  else {
    return (
      <section className="uk-section">

      </section>
    )
  }
}
export default FormElement

