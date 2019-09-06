import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/Section'

export const PageTemplate = ({ title, content, contentComponent, sections }) => {
  // const PageContent = contentComponent || Content
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
const Page = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        sections={post.frontmatter.sections}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Page

export const PageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sections {
          header
          template
          type
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
