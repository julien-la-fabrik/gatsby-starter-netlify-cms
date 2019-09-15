import React from 'react'
import { navigate } from 'gatsby-link'
import FormElement from '../components/FormElement'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export default class Form extends React.Component {

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    // const FormContent = contentComponent || Content
    let content = this.props.content;
    console.log(content);
    let elements = content.elements || [];
    return (
      <div className="uk-container">
        <div className="uk-margin">
          <form
            name={content.formid}
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value={content.formid} />
            {
              elements.map((element, index) => (
                <FormElement key={"section-" + index} type={element.template} content={element} onChange={this.handleChange} />
              ))
            }
            <div className="uk-margin">
              <button type="submit" className="uk-button uk-button-primary">{content.button.label}</button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}
