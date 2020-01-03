import React, { Component } from 'react';
import Form from '../../components/Form'
import '../../components/uikit.scss';


class FormPagePreview extends Component {
  render() {

    const content = this.props.entry.getIn(['data']).toJS();
    return (
      <Form content={content}/>
    )
}
}


export default FormPagePreview
