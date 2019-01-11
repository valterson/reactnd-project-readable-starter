import * as ActionTypes from '../actions/action-types/';

const AUTH_INITIAL_STATE = {
  categories: {},
};

export function categories(state = AUTH_INITIAL_STATE, action) {
  switch (action.type) {
  case ActionTypes.SET_POST_CATEGORIES:
    return { ...state, categories: action.payload };

  default:
    return state;
  }
}
