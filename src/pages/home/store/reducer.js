import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  recommendWriterList: [],
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1 ,
  showScroll: false,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_RECOMMEND_WRITER: {
      return state.set('recommendWriterList', action.data);
    }
    case actionTypes.SET_ARTICLE_LIST: {
      return state.set('articleList', action.data);
    }
    case actionTypes.ADD_MORE_ARTICLE_LIST: {
      // return state.set('articleList', state.get('articleList').concat(action.data));
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.nextPage,
      })
    }
    case actionTypes.SET_RECOMMEND_LIST: {
      return state.set('recommendList', action.data);
    }
    case actionTypes.SET_TOPIC_LIST: {
      return state.set('topicList', action.data);
    }
    case actionTypes.TOGGLE_SCROLL_SHOW: {
      return state.set('showScroll', action.show);
    }
    default: {
      return state;
    }
  }
}
