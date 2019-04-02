import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  TopicWrapper,
  TopicItem,
  MoreTopic,
} from '../style';

class Topic extends PureComponent {
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

  componentDidMount() {
    const { getTopics } = this.props;
    getTopics();
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList']),
});

const mapProps = (dispatch) => ({
  getTopics() {
    const action = actionCreators.getTopicList();
    dispatch(action);
  }
});

export default connect(mapState, mapProps)(Topic);
