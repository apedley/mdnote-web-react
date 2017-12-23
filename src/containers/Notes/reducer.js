import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_NOTES_SUCCESS, LOAD_NOTES_AND_CATEGORIES_SUCCESS, SELECT_NOTE, DESELECT_NOTE, loadCategories, loadCategoriesSuccess } from './actions';

const initialState = {
  categories: [],
  notes: [],
  selectedNote: null
}

function notesReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      }
    case LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload
      }
    case LOAD_NOTES_AND_CATEGORIES_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        categories: action.payload.categories
      }
    case SELECT_NOTE:
      return {
        ...state,
        selectedNote: action.payload
      }
    case DESELECT_NOTE:
      return {
        ...state,
        selectedNote: null
      }
    default:
      return state;
  }
}

export default notesReducer;

