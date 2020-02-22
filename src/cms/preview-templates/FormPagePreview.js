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
      <div>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit-icons.min.js"></script>
        <Form content={content}/>
      </div>
    )
}
}


export default FormPagePreview
