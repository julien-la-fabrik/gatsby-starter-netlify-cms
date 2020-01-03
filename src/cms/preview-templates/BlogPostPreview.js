import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'
if (typeof window !== 'undefined') {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons.min');
    uikit.use(icons);
}
const BlogPostPreview = ({ entry, widgetFor }) => (

  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
