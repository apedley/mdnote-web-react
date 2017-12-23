import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNotesAndCategories, selectNote, deselectNote } from './actions';
import { selectCategoriesWithNotes, selectErrors } from './selectors';
import CategoryList from './components/CategoryList';
import NoteItem from './components/NoteItem';
import styled from 'styled-components'
import { toggleCategory } from '../App/actions';
import { selectCollapsedCategories } from '../App/selectors';


class Notes extends Component {
  constructor(props) {
    super(props);
    this.props.actions.loadNotesAndCategories();

    // this.categoryClicked = this.categoryClicked.bind(this);
  }

  renderCategories() {
    if (this.props.categoriesEntities.ids.length < 1) {
      return;
    }
    
    return (
      <CategoryList 
        categoryEntities={this.props.categoriesEntities} 
        categoryClick={this.props.actions.toggleCategory} 
        noteClick={this.props.actions.selectNote}
      />
      
    );
  }
  
  renderSelectedNote() {
    if (this.props.selectedNote === null) {
      return;
    }

    return (
      <NoteItem note={this.props.selectedNote} />
    )
  }


  render() {
    const Wrapper = styled.div`
      height: 95vh;
      display: flex;
      flex-wrap: wrap;
    `
    
    return (
      <Wrapper>
        {this.renderCategories()}
        {this.renderSelectedNote()}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  categoriesEntities: selectCategoriesWithNotes(state),
  errors: selectErrors(state),
  selectedNote: state.notes.selectedNote,
  collapsedCategories: selectCollapsedCategories(state)
});


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadNotesAndCategories,
      selectNote,
      deselectNote,
      toggleCategory
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
