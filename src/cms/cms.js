import CMS from 'netlify-cms-app';
import { page } from './collections/page';
import { form } from './collections/form';
import { settings } from './collections/settings';

import BlogPostPreview from './preview-templates/BlogPostPreview'
import FormPagePreview from './preview-templates/FormPagePreview'
import PagePreview from './preview-templates/PagePreview'
import '../components/uikit.scss';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);

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

CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('form', FormPagePreview)

 CMS.registerPreviewTemplate('blog', BlogPostPreview)
