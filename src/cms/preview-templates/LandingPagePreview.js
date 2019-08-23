import React from 'react'
import PropTypes from 'prop-types'
import { LandingPageTemplate } from '../../templates/landing-page'

const LandingPagePreview = ({ entry, widgetFor }) =>{ 
console.log(entry);
  return (
  <LandingPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)}

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LandingPagePreview
