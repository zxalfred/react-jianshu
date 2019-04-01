import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
  MoreTopic,
} from '../style';

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className="topic-img"
                  src={item.get('imgUrl')}
                  alt="topic"
                />
                {item.get('title')}
              </TopicItem>
            );
          })
        }
        <MoreTopic>
          更多热门专题&nbsp;&gt;
        </MoreTopic>
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList']),
});

export default connect(mapState, null)(Topic);
