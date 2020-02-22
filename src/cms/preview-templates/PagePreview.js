import React, { Component } from 'react';
import { PageTemplate } from '../../templates/page'
import '../../components/uikit.scss';
if (typeof window !== 'undefined') {
    const uikit = require('uikit');
    const icons = require('uikit/dist/js/uikit-icons.min');
    uikit.use(icons);
}

function getItemsFromSection(raw){
  var output = [];
  // console.log(raw);
  if(typeof raw !=="object"){
    return [];
  }
  if(raw.hasOwnProperty('_tail')){
    for (var i in raw._tail.array){
      var obj = {};
      for (let key in raw._tail.array[i]._root.entries) {
        let item =raw._tail.array[i]._root.entries[key];
        if(typeof item[1]==="object"){
          obj[item[0]]=getItemsFromSection(item[1]);
        }else{
          obj[item[0]]=item[1];
        }
      }
      output.push(obj);
    }
  }
  else if(raw.hasOwnProperty('_root')){
    output = {};
    for (let key in raw._root.entries) {
      let item =raw._root.entries[key];
      if(typeof item[1]==="object"){
        output[item[0]]=getItemsFromSection(item[1]);
      }else{
        output[item[0]]=item[1];
      }
    }
  }
  return output;
}

class PagePreview extends Component {
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
        const uikit = require('uikit');
        const icons = require('uikit/dist/js/uikit-icons.min');
        uikit.use(icons);
    }
  };
  render() {

    const rawSections = this.props.entry.getIn(['data','sections']);
    const sections = getItemsFromSection(rawSections);

    return (
      <div>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit-icons.min.js"></script>
        <PageTemplate sections={sections}/>
      </div>
    )
}
}


export default PagePreview
