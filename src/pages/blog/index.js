import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {

    return (
      <Layout>

        <div className="uk-margin-bottom uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -500" style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
        >
          <div className="uk-container uk-margin-auto-vertical">

            <div className="uk-text-center">
              <h1 className="uk-background-primary uk-padding-small"            >
                Latest Stories
              </h1>
            </div>
          </div>
        </div>

        <section className="uk-section">
          <div className="uk-container">
            <BlogRoll />

          </div>
        </section>
      </Layout>
    )
  }
}
