import React, { Component } from 'react';
import Form from '../../components/Form'
import '../../components/uikit.scss';
if (typeof window !== 'undefined') {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons.min');
    uikit.use(icons);
}

class FormPagePreview extends Component {
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
        const uikit = require('uikit');
        const icons = require('uikit/dist/js/uikit-icons.min');
        uikit.use(icons);
    }
  };
  render() {

    const content = this.props.entry.getIn(['data']).toJS();
    return (
      <Form content={content}/>
    )
}
}


export default FormPagePreview
