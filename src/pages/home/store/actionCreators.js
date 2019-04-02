import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const setRecommendWriter = (data) => ({
  type: actionTypes.SET_RECOMMEND_WRITER,
  data: fromJS(data),
});

const setArticleList = (data) => ({
  type: actionTypes.SET_ARTICLE_LIST,
  data: fromJS(data),
});

const setRecommendList = (data) => ({
  type: actionTypes.SET_RECOMMEND_LIST,
  data: fromJS(data),
});

const setTopicList = (data) => ({
  type: actionTypes.SET_TOPIC_LIST,
  data: fromJS(data),
});

export const getRecommendWriter = () => {
  return (dispatch) => {
    axios.get('/api/recommendWriter.json').then((res) => {
      const { data } = res.data;
      const action = setRecommendWriter(data);
      dispatch(action);
    }).catch((err) => {
      console.log(err);
    })
  }
};

export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/articleList.json').then((res) => {
      const { data } = res.data;
      const action = setArticleList(data);
      dispatch(action);
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getRecommendList = () => {
  return (dispacth) => {
    axios.get('/api/recommendList.json').then((res) => {
      const { data } = res.data;
      const action = setRecommendList(data);
      dispacth(action);
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getTopicList = () => {
  return (dispacth) => {
    axios.get('/api/topicList.json').then((res) => {
      const { data } = res.data;
      const action = setTopicList(data);
      dispacth(action);
    }).catch((err) => {
      console.log(err);
    })
  }
}
