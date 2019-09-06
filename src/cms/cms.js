import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import LandingPagePreview from './preview-templates/LandingPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('landing', LandingPagePreview)
CMS.registerPreviewStyle('../components/uikit.scss')
 CMS.init();