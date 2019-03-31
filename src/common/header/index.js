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
  SearchInfo,
  SearchInfoTitlt,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';
import { actionCreators } from './store';

const getListArea = (show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitlt>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitlt>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
}

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
          {getListArea(focused)}
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
    focused: state.getIn(['header', 'focused']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
