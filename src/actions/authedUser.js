import { showLoading, hideLoading } from 'react-redux-loading';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

export function setAuthedUser(user) {
   return {
      type: SET_AUTHED_USER,
      user,
   };
}
export function removeAuthedUser() {
   return {
      type: REMOVE_AUTHED_USER,
   };
}

export function handleAuthedUser(user) {
   return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading());
      // const authedUser = sessionStorage.getItem('user');

      if (authedUser) {
         // sessionStorage.removeItem('user');
         dispatch(removeAuthedUser());
      } else {
         // sessionStorage.setItem('user', JSON.stringify(user));
         dispatch(setAuthedUser(user));
      }
      dispatch(hideLoading());
   };
}
