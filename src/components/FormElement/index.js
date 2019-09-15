
import React from 'react'
import Text from './Text'
import TextArea from './TextArea'
import Email from './Email'
import Password from './Password'

const FormElements= {
  Text, TextArea, Email, Password
}

export const FormElement = ({ type, content, onChange }) => {
  const FormElement = FormElements[content.template];

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
