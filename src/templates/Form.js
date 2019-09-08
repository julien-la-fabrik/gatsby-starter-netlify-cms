import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import FormElement from '../components/FormElement'

export const FormTemplate = ({ title, body, elements }) => {
  // const FormContent = contentComponent || Content
  elements = elements || []
  return (
    <div className="uk-width-1-1">
      {
        elements.map((element, index) => (
          <FormElement key={"section-" + index} type={element.template} content={element} />
        ))
      }
    </div>
  )
}
const Form = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <FormTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        sections={post.frontmatter.sections}
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
        elements {
          title
          template
          description
          placeholder
        }
      }
    }
  }
`
