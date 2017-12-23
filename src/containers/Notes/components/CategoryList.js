import React from 'react';
import PropTypes from 'prop-types'
import { Icon, Button, List, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NoteList from './NoteList';
import SplitFlexView from '../../../components/SplitFlexView';

function CategoryList({ categoryEntities, categoryClick, noteClick }) {

  const { ids, categories } = categoryEntities;

  const categoryItems = ids.map( categoryId => {
    const category = categories[categoryId];

    return (
      <List.Item key={categoryId}>
        <List.Header onClick={() => { categoryClick(category) }}>
          {category.name} - {category.notes.length}
        </List.Header>
        <NoteList notes={category.notes} noteClick={noteClick}></NoteList>
      </List.Item>
    )
  });

  return (
    <SplitFlexView>
      <List>
      { categoryItems }
      </List>
    </SplitFlexView>
  )
}


// CategoryList.propTypes = {
//   categoryEntities: PropTypes.object
// };

// CategoryList.defaultProps = {
//   categoryEntities: { categories: [], ids: [] }
// };

export default CategoryList;
