import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import GlobalIconFont from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalIconFont />
    <App />
  </Fragment>, 
  document.getElementById('root')
);