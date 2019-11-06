import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import { HTMLContent } from '../components/Content'
import Section from '../components/sections'

export const PageTemplate = ({ sections }) => {
  // const PageContent = contentComponent || Content
  sections = sections || []
  // console.log(sections);
  return (
    <div className="uk-width-1-1">
      {
        sections.map((section, index) => (
          <Section key={"section-" + index} template={section.template} content={section} />
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
  query PageNew($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
          title
          templateKey
          sections {
            Cards {
              title
              body
              type
              formitem
              alt
              button {
                label
                link
                style {
                  id
                  class
                }
              }
              style {
                id
                class
              }
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            images {
              alt
              title
              body
              image {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              button {
                label
                link
                style {
                  class
                  id
                }
              }
              style {
                class
                id
              }
            }
            style {
              container
              id
              class
            }
            type
            title
            template
          }
        }
    }
  }
`
