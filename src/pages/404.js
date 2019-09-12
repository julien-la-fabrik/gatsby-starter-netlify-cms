import React from 'react'
import Layout from '../components/Layout'
import settings from '../settings'

const NotFoundPage = () => (
  <Layout>
    <section className="uk-section">
      <div className="uk-container uk-text-center">
        <h1>{settings.siteinfos.title404}</h1>
        <p>{settings.siteinfos.message404}</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
