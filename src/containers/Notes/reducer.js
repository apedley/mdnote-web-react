import { 
  LOAD_NOTES_AND_CATEGORIES_SUCCESS,
  LOAD_NOTES_AND_CATEGORIES_FAILURE,
  SELECT_NOTE,
  DESELECT_NOTE 
} from './actions';

const initialState = {
  categories: [],
  notes: [],
  selectedNote: null,
  errors: []
}

function notesReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_NOTES_AND_CATEGORIES_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
        categories: action.payload.categories
      }
    case LOAD_NOTES_AND_CATEGORIES_FAILURE:
     return {
       ...state,
       errors: action.payload
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

