import CMS from 'netlify-cms-app';
import { blog } from './collections/blog';
import { page } from './collections/page';
import { form } from './collections/form';
import { settings } from './collections/settings';
const customCollections = require('../settings/customcollections.json');

// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import LandingPagePreview from './preview-templates/LandingPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
// import IndexPagePreview from './preview-templates/IndexPagePreview'




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
    collections: [page,blog,form,settings,...customCollections.customcollections],
  },
});

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('landing', LandingPagePreview)
// CMS.registerPreviewStyle('../components/uikit.scss')
