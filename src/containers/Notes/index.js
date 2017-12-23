import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadNotesAndCategories, selectNote, deselectNote } from './actions';
import { selectCategoriesWithNotes } from './selectors';
import CategoryList from './components/CategoryList';
import NoteItem from './components/NoteItem';
import styled from 'styled-components'

class Notes extends Component {
  constructor(props) {
    super(props);
    this.props.actions.loadNotesAndCategories();

    this.categoryClicked = this.categoryClicked.bind(this);
  }

  categoryClicked(category) {
    console.log('category clicked: ');
    console.dir(category);
  }

  renderCategories() {
    if (this.props.categoriesEntities.ids.length < 1) {
      return;
    }
    
    return (
      <CategoryList 
        categoryEntities={this.props.categoriesEntities} 
        categoryClick={this.categoryClicked} 
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
  selectedNote: state.notes.selectedNote
});


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadNotesAndCategories,
      selectNote,
      deselectNote
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
