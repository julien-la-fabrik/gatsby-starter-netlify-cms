import React from 'react'
import PropTypes from 'prop-types'
import { LandingPageTemplate } from '../../templates/landing-page'

const LandingPagePreview = ({ entry, widgetFor }) => (
  <LandingPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    sections={entry.getIn(['data', 'sections'])}
  />
)

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LandingPagePreview
