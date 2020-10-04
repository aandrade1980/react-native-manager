import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({email, password}) => {
  return (dispath) => {
    dispath({
      type: LOGIN_USER,
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispath, user))
      .catch((error) => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispath, user))
          .catch(() => loginUserFail(dispath, error));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main();
};

const loginUserFail = (dispatch, error) =>
  dispatch({type: LOGIN_USER_FAIL, payload: error.message});
