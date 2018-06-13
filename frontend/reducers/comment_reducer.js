import { RECEIVE_BILL } from '../actions/bill_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
    debugger

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};

    case RECEIVE_BILL:
      return merge({}, state, action.payload.comments)

    default:
      return state;
  }
};

export default commentReducer;