import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  WriterAvatar,
  WriterInfo,
  WriterFollow,
  WrirterShowMore,
} from '../style';

class Writer extends PureComponent {

  componentDidMount() {
    const { getRecommendWriter } = this.props;
    getRecommendWriter();
  }

  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
        </WriterTitle>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <WriterAvatar>
                  <img
                    src={item.get('avatar_source')}
                    alt="writer-avatar"
                  />
                </WriterAvatar>
                <WriterInfo>
                  <p className="writer-name">{item.get('nickname')}</p>
                  <p className="writer-info">
                    写了{this.formatNum(item.get('total_wordage'))}字·{this.formatNum(item.get('total_likes_count'))}喜欢
                  </p>
                </WriterInfo>
                <WriterFollow>
                  +关注
                </WriterFollow>
              </WriterItem>
            );
          })
        }
        <WrirterShowMore>
          查看全部&nbsp;>
        </WrirterShowMore>
      </WriterWrapper>
    );
  }

  formatNum(value) {
    if (value < 1000) {
      return String(value);
    } else {
      return `${(value / 1000).toFixed(1)}k`
    }
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendWriterList']),
});

const mapDispatch = (dispatch) => ({
  getRecommendWriter() {
    const action = actionCreators.getRecommendWriter();
    dispatch(action);
  }
});

export default connect(mapState, mapDispatch)(Writer);
