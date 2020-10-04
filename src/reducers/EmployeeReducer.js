import {EMPLOYEES_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return payload;
    default:
      return state;
  }
};
