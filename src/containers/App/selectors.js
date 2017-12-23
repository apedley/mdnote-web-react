import { createSelector } from 'reselect'

const selectLayoutDomain = state => state.layout;

const selectCollapsedCategories = createSelector(
  selectLayoutDomain,
  layoutState => layoutState.collapsedCategories
);

export {
  selectLayoutDomain,
  selectCollapsedCategories
}