// export const TOGGLE_SIDEBAR = 'App/TOGGLE_SIDEBAR';

// export const OPEN_SIDEBAR = 'App/OPEN_SIDEBAR';
// export const CLOSE_SIDEBAR = 'App/CLOSE_SIDEBAR';

export const SHOW_ERROR = 'App/SHOW_ERROR'

export const TOGGLE_CATEGORY = 'App/TOGGLE_CATEGORY'


export function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: error
  }
}

export function toggleCategory(id) {
  return {
    type: TOGGLE_CATEGORY,
    payload: id
  }
}
// export function toggleSidebar() {
//   return {
//     type: TOGGLE_SIDEBAR
//   }
// }

// export function openSidebar() {
//   return {
//     type: OPEN_SIDEBAR
//   }
// }

// export function closeSidebar() {
//   return {
//     type: CLOSE_SIDEBAR
//   }
// }