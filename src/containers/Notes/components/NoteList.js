import React from 'react';
import PropTypes from 'prop-types'
import { Icon, Popup, Table, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 1rem;
`;

function NoteList({ notes, noteClick }) {
  if (notes.length < 1) {
    return '';
  }

  const noteItems = notes.map( note => {
    const updatedDate = new Date(note.updated_at); 
    const updatedDateString = updatedDate.toLocaleDateString();
    const updatedTimeString = updatedDate.toLocaleTimeString();
    const updatedCell = (
      <Table.Cell textAlign='right'>
        {updatedDateString}
      </Table.Cell>
    )

    const bodyPreview = note.body.length > 77 ? note.body.substr(0, 80) + '...' : note.body;

    return (
      <Table.Row key={note.id} onClick={() => { noteClick(note); }} style={{cursor: 'pointer'}}>
        <Table.Cell>
          {note.title}
        </Table.Cell>
        
        <Table.Cell>
          { bodyPreview }
        </Table.Cell>

        <Popup on="hover" trigger={ updatedCell } basic>
          <Popup.Content>
            <div style={{textAlign: 'center'}}>
              Last updated at <strong>{updatedTimeString}</strong> on <strong>{updatedDateString}</strong>
            </div>
          </Popup.Content>
        </Popup>
        
      </Table.Row>
    )
  })
  
  return (
    <Wrapper>
      <Table compact selectable unstackable style={{ border: '0' }}>
        <Table.Body>
          { noteItems }
        </Table.Body>
      </Table>
    </Wrapper>
  )
}


NoteList.propTypes = {
  notes: PropTypes.array
};

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
