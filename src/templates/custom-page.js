import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CustomPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="uk-section">
      <div className="uk-container">
        <h2 className="">
          {title}
        </h2>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

CustomPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CustomPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CustomPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CustomPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CustomPage

export const aboutPageQuery = graphql`
  query CustomPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
