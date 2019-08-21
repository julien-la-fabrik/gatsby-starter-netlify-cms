import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

var CategoriesControl = createClass({
  handleChange: function(e) {
    this.props.onChange(e.target.value.split(',').map((e) => e.trim()));
  },

  render: function() {
    var value = this.props.value;
    return h('input', { type: 'text', value: value ? value.join(', ') : '', onChange: this.handleChange });
  }
});

var CategoriesPreview = createClass({
  render: function() {
    return h('ul', {},
      this.props.value.map(function(val, index) {
        return h('li', {key: index}, val);
      })
    );
  }
});

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);
