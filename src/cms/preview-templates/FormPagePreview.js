import React, { Component } from 'react';
import Form from '../../components/Form'
import '../../components/uikit.scss';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);

class FormPagePreview extends Component {
  render() {

    const content = this.props.entry.getIn(['data']).toJS();
    return (
      <Form content={content}/>
    )
}
}


export default FormPagePreview
