import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_CLEAR,
} from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', shift: undefined};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [payload.prop]: payload.value,
      };
    case EMPLOYEE_CREATE:
    case EMPLOYEE_SAVE_SUCCESS:
    case EMPLOYEE_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
