
import { useStaticQuery, graphql } from "gatsby"
export const allContent = () => {
  const { site } = useStaticQuery(
    graphql`query allContent{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, limit: 10, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        fields {
          slug
        }
        html
        frontmatter {
          title
          date
          description
          templateKey
        }
      }
    }
  }
}

    `
  )
  return site.allContent
}
