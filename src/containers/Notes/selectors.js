import { createSelector } from 'reselect'


const selectCategoriesDomain = state => state.notes.categories;
const selectNotesDomain = state => state.notes.notes;

const selectCategoriesWithNotes = createSelector(
  selectCategoriesDomain,
  selectNotesDomain,
  (categories, notes) => {
    if (categories.length === 0) {
      return { ids: [], categories: {} };
    }

    const uncategorized = {
      name: 'Uncategorized',
      id: 0,
      notes: []
    }

    let result = { ids: [0], categories: {} };

    categories.forEach(category => {
      const id = category.id;
      result.ids.push(id);
      category.notes = [];
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
  selectCategoriesDomain,
  selectNotesDomain,
  selectCategoriesWithNotes
}