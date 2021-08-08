import {
   RECEIVE_QUESTIONS,
   SAVE_QUESTION,
   SAVE_QUESTION_ANSWER,
} from '../actions/questions';

export default function questions(state = {}, action) {
   switch (action.type) {
      case RECEIVE_QUESTIONS:
         return {
            ...state,
            ...action.questions,
         };
      case SAVE_QUESTION:
         return {
            ...state,
            [action.question.id]: { ...action.question },
         };
      case SAVE_QUESTION_ANSWER:
         return {
            ...action.questions,
         };

      default:
         return state;
   }
}
