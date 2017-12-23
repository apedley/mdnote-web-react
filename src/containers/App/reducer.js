import {
  SHOW_ERROR,
  TOGGLE_CATEGORY
} from './actions';

const initialState = {
  errors: [],
  collapsedCategories: {
    7: true,
    0: true
  }
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR: {
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }
    }
    case TOGGLE_CATEGORY: {
      return {
        ...state,
        collapsedCategories: {
          ...state.collapsedCategories,
          // set key = objectId to false if true, true if false or undefined
          [action.payload]: state.collapsedCategories[action.payload] === true ? false : true
        }
      }
    }
    default:
      return state;
  }
}

export default appReducer;
