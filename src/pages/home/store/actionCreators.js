import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const setRecommendWriter = (users) => ({
  type: actionTypes.SET_RECOMMEND_WRITER,
  users: fromJS(users),
});

export const getRecommendWriter = () => {
  return (dispatch) => {
    axios.get('/api/recommendWriter.json').then((res) => {
      const { users } = res.data;
      const action = setRecommendWriter(users);
      dispatch(action);
    }).catch((err) => {
      console.log(err);
    })
  }
};
