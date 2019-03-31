import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style';
import * as actionCreator from '../../store/actionCreator';

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">
          <i className="iconfont">&#xe786;</i>
          首页
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe60f;</i>
          下载App
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={focused ? "focused" : ""}></NavSearch>
          </CSSTransition>
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe687;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.getSearchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.getSearchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
