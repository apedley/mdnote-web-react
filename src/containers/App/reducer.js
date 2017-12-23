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
      const categoryId = action.payload;
      const categoryOpen = state.collapsedCategories[categoryId] === true ? false : true;

      const newCollapsedCategories = { ...state.collapsedCategories };
      newCollapsedCategories[categoryId] = categoryOpen;

      return {
        ...state,
        collapsedCategories: newCollapsedCategories
      }
    }
    default:
      return state;
  }
}

export default appReducer;
