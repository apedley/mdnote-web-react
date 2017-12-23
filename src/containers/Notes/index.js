import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadNotesAndCategories, selectNote, updateEditNote, saveEditNote } from './actions';
import { selectCategoriesWithNotes, selectErrors, selectSelectedNote, selectEditNote } from './selectors';

import { toggleCategory } from '../App/actions';
import { selectCollapsedCategories } from '../App/selectors';

import SplitFlexView from '../../components/SplitFlexView';
import SplitFlexItem from '../../components/SplitFlexItem';

import CategoryList from './components/CategoryList';
import NoteItem from './components/NoteItem';
import EditNote from './components/EditNote';



class Notes extends Component {
  constructor(props) {
    super(props);
    this.props.actions.loadNotesAndCategories();
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
      return (
        <SplitFlexItem>
          Select a note from the list
        </SplitFlexItem>
      )
    }

    return (
      <NoteItem note={this.props.selectedNote} />
    )
  }


  renderLibraryView() {

    return (
      <SplitFlexView reverseWhenSmall>
        {this.renderCategories()}
        {this.renderSelectedNote()}
      </SplitFlexView>
    );
  }

  renderNewView() {

    return (
      <SplitFlexView>
        <EditNote onSubmit={this.props.actions.saveEditNote} onChange={this.props.actions.updateEditNote} />
        <NoteItem note={this.props.editNote} />
      </SplitFlexView>
    )
  }
  render() {
    if (this.props.path === '/notes') {
      return this.renderLibraryView();
    }

    if (this.props.path === '/notes/new') {
      return this.renderNewView();
    }

    return (
      <div>lol</div>
    )
  }
}

const mapStateToProps = state => ({
  categoriesEntities: selectCategoriesWithNotes(state),
  errors: selectErrors(state),
  selectedNote: selectSelectedNote(state),
  collapsedCategories: selectCollapsedCategories(state),
  editNote: selectEditNote(state)
});

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      loadNotesAndCategories,
      selectNote,
      toggleCategory,
      updateEditNote,
      saveEditNote
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
