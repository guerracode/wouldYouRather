import { RECEIVE_USERS } from '../actions/users';
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function users(state = {}, action) {
   switch (action.type) {
      case RECEIVE_USERS:
         return {
            ...state,
            ...action.users,
         };
      case SAVE_QUESTION:
         return {
            ...action.users,
         };
      case SAVE_QUESTION_ANSWER:
         return {
            ...action.users,
         };

      default:
         return state;
   }
}
