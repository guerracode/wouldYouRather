import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser';
import { SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function authedUser(state = null, action) {
   switch (action.type) {
      case SET_AUTHED_USER:
         return action.user;
      case REMOVE_AUTHED_USER:
         return null;
      case SAVE_QUESTION_ANSWER:
         return {
            ...action.authedUser,
         };

      default:
         return state;
   }
}
