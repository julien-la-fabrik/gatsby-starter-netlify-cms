import React, { Component } from 'react';
import Form from '../../components/Form'
import '../../components/uikit.scss';


class FormPagePreview extends Component {
  render() {

    const content = this.props.entry.getIn(['data']).toJS();
    return (
      <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit-icons.min.js"></script>
        <Form content={content}/>
      </div>
    )
}
}


export default FormPagePreview
