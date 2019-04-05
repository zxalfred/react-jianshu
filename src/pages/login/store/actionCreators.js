import axios from 'axios';
import * as actionTypes from './constants';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true,
});

export const logout = () => ({
  type: actionTypes.LOG_OUT,
  value: false,
})

export const login = (account, passwd) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${passwd}`).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        alert('登录失败');
      }
    });
  }
}
