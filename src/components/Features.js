import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <section className="uk-section">
    <div uk-grid="" className="uk-child-width-1-2 uk-grid-medium uk-grid-match ">
      {gridItems.map(item => (
        <div key={item.text}>
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="uk-card-body">
              <h3 className="uk-card-title">Media Top</h3>
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
