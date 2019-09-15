import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Form from '../components/Form'

const FormPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Form
        content={post.frontmatter}
      />
    </Layout>
  )
}

FormPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FormPage

export const FormQuery = graphql`
  query FormPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        formid
        button {
          label
          style {
            class
            id
          }
        }
        elements {
          title
          name
          template
          description
          placeholder
          style {
            class
            id
          }
        }
      }
    }
  }
`
