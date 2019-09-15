import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Form from '../Form'


export const FormBlock  = ({ content }) => {

  return (
      <StaticQuery
        query={graphql`
          query{
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "form-page"}}}) {
            edges {
              node {
                id
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
            }
          }
`}
        render={data => {
          let form = data.allMarkdownRemark.edges.find(forms => forms.node.frontmatter.title === content.formitem).node;
          return (
            <Form content={form.frontmatter}/>
          )
        }}
      />
  )
}

export default FormBlock
