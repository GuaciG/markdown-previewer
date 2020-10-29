import React from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
      

class MarkdownEditor extends React.Component {
  
  render(){
    return (
      <div>
        <Header />  
        <Editor />
      </div>  
    );
  }
}

export default MarkdownEditor;
