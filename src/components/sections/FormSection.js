import React from "react"
import { StaticQuery, graphql } from "gatsby"
import FormElement from '../FormElement'

export default ({ content }) => {

  // console.log(content);
  return (
    <section className="uk-section">
      <div className={content.container === "full" ? 'uk-width-1-1' : "uk-container"}>
        <h2>{content.header}</h2>
        <StaticQuery
          query={graphql`
            query{
              allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "Form"}}}) {
              edges {
                node {
                  id
                  frontmatter{
                    title
                    submitbtn
                    formid
                    elements {
                      description
                      placeholder
                      template
                      title
                      type
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
              <div className="uk-margin">
                <form name={form.frontmatter.formid} method="post" action="/contact/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value={form.frontmatter.formid} />
                  {
                    form.frontmatter.elements.map((element, index) => (
                      <FormElement key={"formitem-" + index} type={element.template} content={element} />
                    ))
                  }
                  <div className="uk-margin">
                    <button type="submit" className="uk-button uk-button-primary">{form.frontmatter.submitbtn}</button>
                  </div>
                </form>
              </div>
            )
          }}
        />

      </div>
    </section>
  )
}