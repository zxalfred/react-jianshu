import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_DETAIL: {
      return state.merge({
        title: action.title,
        content: action.content,
      });
    }
    default: {
      return state;
    }
  }
}
