

export const LOAD_NOTES_AND_CATEGORIES = 'Notes/LOAD_NOTES_AND_CATEGORIES'
export const LOAD_NOTES_AND_CATEGORIES_SUCCESS = 'Notes/LOAD_NOTES_AND_CATEGORIES_SUCCESS'
export const LOAD_NOTES_AND_CATEGORIES_FAILURE = 'Notes/LOAD_NOTES_AND_CATEGORIES_FAILURE'

export const SELECT_NOTE = 'Notes/SELECT_NOTE';
export const DESELECT_NOTE = 'Notes/DESELECT_NOTE';

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