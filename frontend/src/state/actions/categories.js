import * as ActionTypes from '../actions/action-types';
import { apiGetCatAll } from '../../network/api/api-category';

export function setCategories(categories) {
  return {
    type: ActionTypes.SET_POST_CATEGORIES,
    payload: categories.categories
  };
}

export function getCategories() {
  return (dispatch) => {
    apiGetCatAll().then((categories) => {
      dispatch(setCategories(categories));
    });
  };
}
