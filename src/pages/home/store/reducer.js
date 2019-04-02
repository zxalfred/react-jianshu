import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  recommendWriterList: [],
  topicList: [],
  articleList: [],
  recommendList: [],
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_RECOMMEND_WRITER: {
      return state.set('recommendWriterList', action.data);
    }
    case actionTypes.SET_ARTICLE_LIST: {
      return state.set('articleList', action.data);
    }
    case actionTypes.SET_RECOMMEND_LIST: {
      return state.set('recommendList', action.data);
    }
    case actionTypes.SET_TOPIC_LIST: {
      return state.set('topicList', action.data);
    }
    default: {
      return state;
    }
  }
}
