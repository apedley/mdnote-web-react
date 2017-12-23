import authLogic from './containers/Auth/logic';
import notesLogic from './containers/Notes/logic';

export default [
  ...authLogic,
  ...notesLogic,
];
