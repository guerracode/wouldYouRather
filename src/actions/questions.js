import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveQuestion, _saveQuestionAnswer } from '../util/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
   return {
      type: RECEIVE_QUESTIONS,
      questions,
   };
}

export function saveQuestion({ question, users }) {
   return {
      type: SAVE_QUESTION,
      question,
      users,
   };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
   return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());

      const fullQuestion = {
         optionOneText,
         optionTwoText,
         author: authedUser.id,
      };

      return _saveQuestion(fullQuestion)
         .then((res) => dispatch(saveQuestion(res)))
         .then(() => {
            dispatch(hideLoading());
         });
   };
}

export function saveQuestionAnswer({ questions, users }, authedUser) {
   return {
      type: SAVE_QUESTION_ANSWER,
      questions,
      users,
      authedUser: users[authedUser.id],
   };
}

export function handleSaveQuestionAnswer(qid, answerSelected) {
   return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());

      const fullQuestionAnswer = {
         authedUser: authedUser.id,
         qid,
         answer: answerSelected === 1 ? 'optionOne' : 'optionTwo',
      };

      return _saveQuestionAnswer(fullQuestionAnswer)
         .then((res) => {
            dispatch(saveQuestionAnswer(res, authedUser));
         })
         .then(() => {
            dispatch(hideLoading());
         });
   };
}
