import CMS from 'netlify-cms-app';
import { page } from './collections/page';
import { form } from './collections/form';
import { settings } from './collections/settings';

// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import LandingPagePreview from './preview-templates/LandingPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'

const collections = require('../settings/collections.json');



CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'git-gateway',
      branch: 'master',
    },
    // publish_mode: 'editorial_workflow',
    media_folder: 'static/img',
    public_folder: '/img',
    collections: [page,form,...collections.collections,settings],
  },
});

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
 CMS.registerPreviewTemplate('blog', BlogPostPreview)
 CMS.registerPreviewTemplate('blog-new', BlogPostPreview)
// CMS.registerPreviewTemplate('landing', LandingPagePreview)
// CMS.registerPreviewStyle('../components/uikit.scss')
