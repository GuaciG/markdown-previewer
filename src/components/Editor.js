import React from 'react';
import marked from 'marked';
import './Editor.css';

const initialMarkdown = 
`
### Headers
# This is a heading size 1
## This is a heading size 2
### This is a heading size 3
#### This is a heading size 4
##### This is a heading size 5
###### This is a heading size 6  
***
### Unordered Lists
- list item one
- list item two
    - list item three
    - list item four
        - list item five
        - list item six
***
### Ordered Lists
1. list item one
2. list item two
    1. list item one
    2. list item two
        - list item in two
***
### Links
[FreeCodeCamp](https://learn.freecodecamp.org)
[Google](https://www.google.com "World's Most Popular Search Engine")
***
### Text Decorations
*italic*
**bold**
***bold and italic***
\`monospace\` 
~~strikethrough~~
***
### Images
![alt text](https://res.cloudinary.com/drpcjt13x/image/upload/v1579858226/Proyectos/Markdown%20Previewer/ReactSmall_glciym.png)
***
### Blockquote
> Be yourself; everyone else is already taken. 
― Oscar Wilde
***
### Code 
\`npm install create-react-app -g\`
\`\`\`
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	
</body>
</html>
\`\`\`
***
### Tables
| Model  | Color   | Price  |
| ------ |---------| ------:|
| Globe  | Black   | $99    |
| Scala  | Blue    | $199   |
| Palais | Yellow  | $399   |
`


var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  renderer,
  breaks: true
})
      

class Editor extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      markdown: initialMarkdown
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){ 
    this.setState({
      markdown: event.target.value
    });  
  }
  
  render(){
    return (
      <div> 
        <div className='container'>
          <div className='left'>
            <textarea id='editor' value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className='right'>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
          </div>  
        </div>
      </div>  
    );
  }
}

export default Editor;