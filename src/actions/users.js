// import { showLoading, hideLoading } from 'react-redux-loading';
// import { getUsers } from '../util/api';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers(users) {
   return {
      type: RECEIVE_USERS,
      users,
   };
}

// export function handleGetUsers() {
//    return (dispatch) => {
//       dispatch(showLoading());

//       return getUsers()
//          .then((users) => dispatch(receiveUsers(users)))
//          .then(() => dispatch(hideLoading()));
//    };
// }
