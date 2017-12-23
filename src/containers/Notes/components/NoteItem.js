import React from 'react';
// import Markdown from 'react-markdown';
import SplitFlexView from '../../../components/SplitFlexView';
import MarkdownViewer from '../../../components/MarkdownViewer';

function NoteItem({ note }) {
  return (
    <SplitFlexView>
      <h2>{ note.title }</h2>
      <MarkdownViewer source={ note.body } />
    </SplitFlexView>
  )
}


export default NoteItem;
