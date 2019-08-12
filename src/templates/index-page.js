import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => (<div>
  <div className="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -500" style={{
    backgroundImage: `url(${
      !!image.childImageSharp
        ? image.childImageSharp.fluid.src
        : image})`,
  }}>
    <div className="uk-container uk-margin-auto-vertical">

      <div className="uk-text-center">

        <h1 className="">
          {title}
        </h1>
        <h3 className="">
          {subheading}
        </h3>
      </div>
    </div>
  </div>

  <section className="uk-section">
    <div className="uk-container">
      <h1 className="uk-margin-medium-top">{mainpitch.title}</h1>
      <h3 className="subtitle">{mainpitch.description}</h3>
      <h3 className="has-text-weight-semibold is-size-2">
        {heading}
      </h3>
      <p>{description}</p>
      <Features gridItems={intro.blurbs} />
      <div className="uk-text-center uk-margin-medium-top">
        <Link className="uk-button uk-button-primary" to="/products">
          See all products
      </Link>
      </div>
      <h3 className="">
        Latest stories
    </h3>
      <BlogRoll />
      <div className="uk-text-center uk-margin-medium-top">
        <Link className="uk-button uk-button-primary" to="/blog">
          Read more
      </Link>
      </div>
    </div>
  </section>
</div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({ blurbs: PropTypes.array })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (<Layout>
    <IndexPageTemplate image={frontmatter.image} title={frontmatter.title} heading={frontmatter.heading} subheading={frontmatter.subheading} mainpitch={frontmatter.mainpitch} description={frontmatter.description} intro={frontmatter.intro} />
  </Layout>)
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({ frontmatter: PropTypes.object })
  })
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
