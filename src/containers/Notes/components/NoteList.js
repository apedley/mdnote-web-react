import React from 'react';
import PropTypes from 'prop-types'
import { Icon, Button, Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

function NoteList({ notes, noteClick }) {
  if (notes.length < 1) {
    return (
      <div></div>
    )
  }

  const noteItems = notes.map( note => {
    const updatedDate = new Date(note.updated_at); 
    const updatedDateString = updatedDate.toLocaleDateString();
    return (
      <Table.Row key={note.id} onClick={() => { noteClick(note); }}>
        <Table.Cell>
          {note.title}
        </Table.Cell>
        <Table.Cell>
          {note.body.substr(0, 45) + '...'}
        </Table.Cell>
        <Table.Cell textAlign='right'>
          {updatedDateString}
        </Table.Cell>
      </Table.Row>
    )
  })
  
  return (
    <Table striped selectable>
      <Table.Body>
        { noteItems }
      </Table.Body>
    </Table>
  )
}


NoteList.propTypes = {
  notes: PropTypes.array
};

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
