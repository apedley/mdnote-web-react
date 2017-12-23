import { createLogic } from 'redux-logic'
import { push } from 'react-router-redux'
import { LOAD_CATEGORIES, LOAD_NOTES, LOAD_CATEGORIES_WITH_NOTES, LOAD_NOTES_AND_CATEGORIES, loadCategoriesSuccess, loadNotesSuccess, loadCategoriesWithNotesSuccess, loadNotesAndCategoriesSuccess} from './actions';


const loadCategoriesLogic = createLogic({
  type: LOAD_CATEGORIES,
  async process({ api, action }, dispatch, done) {

    const res = await api.get('/categories');

    if (res.status !== 200) {
      const errorMessage = res.err ? res.err.message : 'Error getting categories';
      // return dispatch(signinFailed([errorMessage]));
      return done();
    }

    return dispatch(loadCategoriesSuccess(res.body));
  }
});

const loadNotesLogic = createLogic({
  type: LOAD_NOTES,
  async process({ api, action }, dispatch, done) {

    const res = await api.get('/notes');

    if (res.status !== 200) {
      const errorMessage = res.err ? res.err.message : 'Error getting notes';
      // return dispatch(signinFailed([errorMessage]));
      return done();
    }

    return dispatch(loadNotesSuccess(res.body));
  }
});

const loadNotesAndCategoriesLogic = createLogic({
  type: LOAD_NOTES_AND_CATEGORIES,
  async process({ api, action }, dispatch, done) {

    const categoriesResponse = await api.get('/categories');

    if (categoriesResponse.status !== 200) {
      const errorMessage = categoriesResponse.err ? categoriesResponse.err.message : 'Error getting categories';
      
      return done();
    }
    const notesResponse = await api.get('/notes');


    if (notesResponse.status !== 200) {
      const errorMessage = notesResponse.err ? notesResponse.err.message : 'Error getting notes';
      
      return done();
    }

    dispatch(loadNotesAndCategoriesSuccess(notesResponse.body, categoriesResponse.body));
    done();
  }
});

// const loadCategoriesWithNotesLogic = createLogic({
//   type: LOAD_CATEGORIES_WITH_NOTES,
//   async process({ api, action }, dispatch, done) {

//     const res = await api.get('/categories?notes=true');

//     if (res.status !== 200) {
//       const errorMessage = res.err ? res.err.message : 'Error getting categories';
//       // return dispatch(signinFailed([errorMessage]));
//       return done();
//     }

//     return dispatch(loadCategoriesWithNotesSuccess(res.body));
//   }
// })

export default [
  loadCategoriesLogic,
  loadNotesLogic,
  loadNotesAndCategoriesLogic,
  // loadCategoriesWithNotesLogic
]
