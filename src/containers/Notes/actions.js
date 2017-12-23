
export const LOAD_CATEGORIES = 'Notes/LOAD_CATEGORIES'
export const LOAD_CATEGORIES_SUCCESS = 'Notes/LOAD_CATEGORIES_SUCCESS'


export const LOAD_NOTES = 'Notes/LOAD_NOTES'
export const LOAD_NOTES_SUCCESS = 'Notes/LOAD_NOTES_SUCCESS'

export const LOAD_NOTES_AND_CATEGORIES = 'Notes/LOAD_NOTES_AND_CATEGORIES'
export const LOAD_NOTES_AND_CATEGORIES_SUCCESS = 'Notes/LOAD_NOTES_AND_CATEGORIES_SUCCESS'

export const SELECT_NOTE = 'Notes/SELECT_NOTE';
export const DESELECT_NOTE = 'Notes/DESELECT_NOTE';

export function loadCategories () {
  return {
    type: LOAD_CATEGORIES,
  }
}

export function loadCategoriesSuccess (categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    payload: categories
  }
}


export function loadNotes () {
  return {
    type: LOAD_NOTES,
  }
}

export function loadNotesSuccess (notes) {
  return {
    type: LOAD_NOTES_SUCCESS,
    payload: notes
  }
}


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