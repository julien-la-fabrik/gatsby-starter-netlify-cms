import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { navigate } from 'gatsby-link'
import { HTMLContent } from '../components/Content'
import FormElement from '../components/FormElement'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
class FormTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    console.log('change')
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
    let elements = this.props.elements || [];
    let form = this.props.post;
    console.log(this.props);
    return (
      <div className="uk-width-1-1">
        <div className="uk-margin">
          <form
            name={form.frontmatter.formid}
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value={form.frontmatter.formid} />
            {
              elements.map((element, index) => (
                <FormElement key={"section-" + index} type={element.template} content={element} onChange={this.handleChange} />
              ))
            }
          </form>
        </div>
      </div>
    )
  }

}
const Form = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <FormTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        post={post}
        elements={post.frontmatter.elements}
      />
    </Layout>
  )
}

Form.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Form

export const FormQuery = graphql`
  query Form($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        formid
        elements {
          title
          name
          template
          description
          placeholder
        }
      }
    }
  }
`
