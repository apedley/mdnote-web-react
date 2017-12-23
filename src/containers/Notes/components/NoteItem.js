import React from 'react';
// import Markdown from 'react-markdown';
import PropTypes from 'prop-types'
import { Icon, Button, Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
