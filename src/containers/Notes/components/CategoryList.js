import React from 'react';
import { Icon, List, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import NoteList from './NoteList';
import SplitFlexItem from '../../../components/SplitFlexItem';
import { colors } from '../../../theme';

function CategoryList({ categoryEntities, categoryClick, noteClick }) {

  const { ids, categories } = categoryEntities;

  const categoryItems = ids.map( categoryId => {
    const category = categories[categoryId];

    const CategoryWrapper = styled.div`
      margin-bottom: 2rem;
    `

    const categoryHeaderStyle = {
      color: colors.primary,
      // borderBottom: '1px solid darkorange',
      borderBottom: `1px solid ${colors.primary}`,
      paddingBottom: '8px',
      cursor: 'pointer',
      marginBottom: '.5rem'
    }

    let notesView;

    if (category.collapsed) {
      notesView = ''
    } else {
      notesView = (
        <NoteList notes={category.notes} noteClick={noteClick} />
      )
    }

    return (
      <CategoryWrapper key={category.id}>
        <Header size='large' style={categoryHeaderStyle} onClick={() => { categoryClick(category.id); }}>
          <Header.Content>
            <Icon name={ category.collapsed ? 'caret right' : 'caret down'} /> { category.name } - ({category.notes.length})
            {/* <Header.Subheader>
              { category.description }
            </Header.Subheader> */}
          </Header.Content>
        </Header>
        { notesView }
      </CategoryWrapper>
    );
  });

  return (
    <SplitFlexItem>
      <List>
      { categoryItems }
      </List>
    </SplitFlexItem>
  )
}

export default CategoryList;
