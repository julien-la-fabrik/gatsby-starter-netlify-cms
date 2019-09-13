import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { navigate } from 'gatsby-link'
import FormElement from '../FormElement'
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
export default class FormBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

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


  // console.log(content);

  render() {
    let content = this.props.content;
    // console.log(content);
    let that = this;
    return (
      <div className="">
        <StaticQuery
          query={graphql`
            query{
              allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "Form"}}}) {
              edges {
                node {
                  id
                  frontmatter{
                    title
                    submitbtn
                    formid
                    elements {
                      description
                      placeholder
                      template
                      title
                      type
                      cssid
                      cssclass
                      name
                    }
                  }
                }
              }
              }
            }
  `}
          render={data => {
            let form = data.allMarkdownRemark.edges.find(forms => forms.node.frontmatter.title === content.formitem).node;
            return (
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
                    form.frontmatter.elements.map((element, index) => (
                      <FormElement key={"formitem-" + index} type={element.template} content={element} onChange={that.handleChange} />
                    ))
                  }
                  <div className="uk-margin">
                    <button type="submit" className="uk-button uk-button-primary">{form.frontmatter.submitbtn}</button>
                  </div>
                </form>
              </div>
            )
          }}
        />

      </div>
    )
  }
}
