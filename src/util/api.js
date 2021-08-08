import { _getUsers, _getQuestions } from './_DATA.js';

export function getUsers() {
   return _getUsers();
}

export function getInitialData() {
   return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
         users,
         questions,
      })
   );
}
