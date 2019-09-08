import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import  { HTMLContent } from '../components/Content'
import Section from '../components/Section'

export const FormTemplate = ({ title, content, contentComponent, sections }) => {
  // const FormContent = contentComponent || Content
  sections = sections || []
  return (
    <div className="uk-width-1-1">
      {
        sections.map((section, index) => (
          <Section key={"section-" + index} type={section.template} content={section} />
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
        sections {
          header
          template
          type
          body
          container
          cards{
            title
            body
            image{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          images{
            image{
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        }
      }
    }
  }
`
