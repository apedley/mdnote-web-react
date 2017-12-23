

export const LOAD_NOTES_AND_CATEGORIES = 'Notes/LOAD_NOTES_AND_CATEGORIES'
export const LOAD_NOTES_AND_CATEGORIES_SUCCESS = 'Notes/LOAD_NOTES_AND_CATEGORIES_SUCCESS'
export const LOAD_NOTES_AND_CATEGORIES_FAILURE = 'Notes/LOAD_NOTES_AND_CATEGORIES_FAILURE'

export const SELECT_NOTE = 'Notes/SELECT_NOTE';
export const DESELECT_NOTE = 'Notes/DESELECT_NOTE';

export const UPDATE_EDIT_NOTE = 'Notes/UPDATE_EDIT_NOTE';
export const SAVE_EDIT_NOTE = 'Notes/SAVE_EDIT_NOTE';

export function loadNotesAndCategories () {
  return {
    type: LOAD_NOTES_AND_CATEGORIES,
  }
}

export function loadNotesAndCategoriesSuccess(notes, categories) {
  return {
    type: LOAD_NOTES_AND_CATEGORIES_SUCCESS,
    payload: {
      notes,
      categories
    }
  }
}

export function loadNotesAndCategoriesFailure(errors) {
  return {
    type: LOAD_NOTES_AND_CATEGORIES_FAILURE,
    payload: errors
  }
}

export function selectNote(note) {
  return {
    type: SELECT_NOTE,
    payload: note
  }
}

export function deselectNote() {
  return {
    type: DESELECT_NOTE
  }
}

export function updateEditNote(note) {
  return {
    type: UPDATE_EDIT_NOTE,
    payload: note
  }
}


export function saveEditNote(note) {
  return {
    type: SAVE_EDIT_NOTE,
    payload: note
  }
}