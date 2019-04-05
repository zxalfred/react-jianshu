import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN: {
      return state.set('login', action.value);
    }
    default: {
      return state;
    }
  }
}
