import { getInitialData } from '../util/api';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
   return (dispatch) => {
      dispatch(showLoading());

      const authedUser = sessionStorage.getItem('user');
      authedUser && dispatch(setAuthedUser(JSON.parse(authedUser)));

      return getInitialData().then(({ users, questions }) => {
         dispatch(receiveUsers(users));
         dispatch(receiveQuestions(questions));
         dispatch(hideLoading());
      });
   };
}
