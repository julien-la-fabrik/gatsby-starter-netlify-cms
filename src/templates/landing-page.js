import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/sections/Section'

export const LandingPageTemplate = ({ title, content, contentComponent, sections }) => {
  const PageContent = contentComponent || Content
  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="">
          {title}
        </h2>
        <PageContent className="content" content={content} />
        {
          sections.map((section, index) => (
            <Section key={"section-" + index} type={section.type} content={section} />
          ))
        }
      </div>
    </section>
  )
}

LandingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  sections: PropTypes.array,
  contentComponent: PropTypes.func,
}

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post);
  return (
    <Layout>
      <LandingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        sections={post.frontmatter.sections}
      />
    </Layout>
  )
}

// LandingPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }
LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        sections {
          header
          template
          type
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
