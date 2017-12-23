import {
  TOGGLE_SIDEBAR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from './actions';

const initialState = {
  // sidebarOpen: true
}

function appReducer (state = initialState, action) {
  switch (action.type) {
    // case TOGGLE_SIDEBAR: {
    //   return {
    //     ...state,
    //     sidebarOpen: !state.sidebarOpen
    //   }
    // }
    // case OPEN_SIDEBAR: {
    //   return {
    //     ...state,
    //     sidebarOpen: true
    //   }
    // }
    // case CLOSE_SIDEBAR: {
    //   return {
    //     ...state,
    //     sidebarOpen: false
    //   }
    // }
    default:
      return state;
  }
}

export default appReducer;
