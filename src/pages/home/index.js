import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';

class Home extends PureComponent {

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4632/f5d0e094687fe5f05fe8889a3a8c9fcf31e96636.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="banner"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>
            <i className="iconfont ic-backtop">&#xe64f;</i>
          </BackTop>
        ) : null }
      </HomeWrapper>
    );
  }

  handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
