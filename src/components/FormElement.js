import React from 'react'
import FormElements from './Form'

export const FormElement = ({ type, content }) => {
  // console.log(FormElements);
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

