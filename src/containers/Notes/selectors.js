import { createSelector } from 'reselect'
import { selectCollapsedCategories } from '../App/selectors';

const selectNotesDomain = state => state.notes;

const selectCategoriesSubdomain = state => state.notes.categories;
const selectNotesSubdomain = state => state.notes.notes;

const selectErrors = createSelector(
  selectNotesDomain,
  notesState => notesState.errors
);

const selectCategoriesWithNotes = createSelector(
  [selectCategoriesSubdomain, selectNotesSubdomain, selectCollapsedCategories],
  (categories, notes, collapsed) => {
    if (categories.length === 0) {
      return { ids: [], categories: {} };
    }

    const uncategorized = {
      name: 'Uncategorized',
      id: 0,
      notes: [],
      collapsed: collapsed[0] === true
    }

    let result = { ids: [0], categories: {} };

    categories.forEach(category => {
      const id = category.id;
      result.ids.push(id);
      category.notes = [];
      category.collapsed = collapsed[id] === true;
      result.categories[id] = category;
    });

    result.categories[0] = uncategorized;

    notes.forEach(note => {
      if (note.categoryId) {
        result.categories[note.categoryId].notes.push(note);
      } else {
        result.categories[0].notes.push(note);
      }
    });
    
    return result;
  }
);

export {
  selectNotesDomain,
  selectCategoriesSubdomain,
  selectNotesSubdomain,
  selectCategoriesWithNotes,
  selectErrors
}