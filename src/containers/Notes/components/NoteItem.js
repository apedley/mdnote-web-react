import React from 'react';
// import Markdown from 'react-markdown';
import SplitFlexItem from '../../../components/SplitFlexItem';
import MarkdownViewer from '../../../components/MarkdownViewer';

function NoteItem({ note }) {
  return (
    <SplitFlexItem>
      <h2>{ note.title || '(Untitled)' }</h2>
      <MarkdownViewer source={ note.body || '(Body empty)' } />
    </SplitFlexItem>
  )
}

export default NoteItem;
