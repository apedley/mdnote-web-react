import React, { Component, PureComponent } from 'react';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight.js';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

class CodeRenderer extends PureComponent {

  render() {
    return (
      <Highlight language={this.props.language}>
        { this.props.value }
      </Highlight>
    );
  }
}


class MarkdownViewer extends Component {
  render() {
    const source = `# Hello world!`.trim();
    const content = `
      var a = 'hello';
      console.log(a);
    `;
    return (
      <ReactMarkdown source={this.props.source} renderers={{ code: CodeRenderer }}/>
    )

    // return (
    //   <div>
          
    //     <Markdown>
    //       {this.props.source}
    //     </Markdown>
        
    //     <ReactMarkdown source={this.props.source} renderers={{ code: CodeRenderer }}/>

    //     <Highlight language="javascript">
    //       { content }
    //     </Highlight>
    //   </div>
    // )
  }
}

export default MarkdownViewer;
