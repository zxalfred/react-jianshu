import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button,
} from './style';

class Login extends PureComponent {
  render() {
    const { login, handleLogin } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(ele) => { this.account = ele; }} />
            <Input placeholder="密码" type="password" ref={(ele) => { this.passwd = ele;}} />
            <Button onClick={() => handleLogin(this.account, this.passwd)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
    
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login']),
});

const mapDispatch = (dispatch) => ({
  handleLogin(accountEle, passwd) {
    dispatch(actionCreators.login(accountEle.value, passwd.value));
  },
});

export default connect(mapState, mapDispatch)(Login);
