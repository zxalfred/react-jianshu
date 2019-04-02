import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  RecommendWrapper,
  RecommendItem,
} from '../style';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    );
  }

  componentDidMount() {
    const { getRecommend } = this.props;
    getRecommend();
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList']),
});

const mapDispatch = (dispatch) => ({
  getRecommend() {
    const action = actionCreators.getRecommendList();
    dispatch(action);
  }
});

export default connect(mapState, mapDispatch)(Recommend);
