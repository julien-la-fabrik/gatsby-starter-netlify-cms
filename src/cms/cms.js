import CMS from 'netlify-cms-app';
import { page } from './collections/page';
import { form } from './collections/form';
import { settings } from './collections/settings';

import BlogPostPreview from './preview-templates/BlogPostPreview'
import FormPagePreview from './preview-templates/FormPagePreview'
import PagePreview from './preview-templates/PagePreview'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../components/uikit.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const collections = require('../settings/collections.json');

// loads the Icon plugin
UIkit.use(Icons);

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

CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('form', FormPagePreview)

 CMS.registerPreviewTemplate('blog', BlogPostPreview)
