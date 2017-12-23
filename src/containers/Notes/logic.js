import { createLogic } from 'redux-logic'
import {
  LOAD_NOTES_AND_CATEGORIES,
  loadNotesAndCategoriesSuccess,
  loadNotesAndCategoriesFailure
} from './actions';


const loadNotesAndCategoriesLogic = createLogic({
  type: LOAD_NOTES_AND_CATEGORIES,
  async process({ api, action }, dispatch, done) {

    let errors = [];

    const categoriesResponse = await api.get('/categories');

    if (categoriesResponse.status !== 200) {
      const errorMessage = categoriesResponse.err ? categoriesResponse.err.message : 'Error getting categories';
      errors.push(errorMessage);
    }

    const notesResponse = await api.get('/notes');
    if (notesResponse.status !== 200) {
      const errorMessage = notesResponse.err ? notesResponse.err.message : 'Error getting notes';
      errors.push(errorMessage);
    }

    if (errors.length > 0) {
      dispatch(loadNotesAndCategoriesFailure(errors));
      done();
    }
    
    dispatch(loadNotesAndCategoriesSuccess(notesResponse.body, categoriesResponse.body));
    done();
  }
});


export default [
  loadNotesAndCategoriesLogic,
]
