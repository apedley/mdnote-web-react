import React, { Component, PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight.js';

class CodeRenderer extends PureComponent {

  render() {
    return (
      <Highlight className='app-syntax-highlight' language={this.props.language}>
        { this.props.value }
      </Highlight>
    );
  }
}


class MarkdownViewer extends Component {
  render() {
    return (
      <ReactMarkdown source={this.props.source} renderers={{ code: CodeRenderer }}/>
    )
  }
}

export default MarkdownViewer;
