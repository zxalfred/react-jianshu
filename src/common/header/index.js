import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

class Header extends PureComponent {

  getListArea = () => {
    const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for(let i = (page - 1) * 10; i < page * 10; i++) {
        const listItem = jsList[i];
        if(listItem) {
          pageList.push(
            <SearchInfoItem key={listItem}>{listItem}</SearchInfoItem>
          )
        }
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitlt>
            热门搜索
            <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <i ref={(ele) => {this.spinIcon = ele;}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitlt>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      list,
      focused,
      handleInputFocus,
      handleInputBlur,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">
            <Link to="/">
              <i className="iconfont">&#xe786;</i>
              首页
            </Link>
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
                onFocus={() => {handleInputFocus(list)}}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe62d;</i>
            {this.getListArea()}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^\d]/g, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      let target = page;
      if (target < totalPage) {
        target++;
      } else {
        target = 1;
      }
      dispatch(actionCreators.changePage(target));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
