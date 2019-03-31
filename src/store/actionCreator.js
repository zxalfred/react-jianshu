import * as actionTypes from './actionTypes';

export const getSearchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS,
  }
}

export const getSearchBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR,
  }
}
