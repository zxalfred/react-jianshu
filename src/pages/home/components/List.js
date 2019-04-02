import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              // can't use index as key value in reality
              <Fragment key={index}> 
                <ListItem>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="abstract">{item.get('abstract')}</p>
                  </ListInfo>
                  <img
                    className="article-img"
                    src={item.get('imgUrl')}
                    alt="article-pic"
                  />
                </ListItem>
              </Fragment>
            );
          })
        }
        <LoadMore onClick={() => {getMoreList(page)}}>加载更多</LoadMore>
      </div>
    );
  }

  componentDidMount() {
    const { getArticleList } = this.props;
    getArticleList();
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage']),
});

const mapDispatch = (dispatch) => ({
  getArticleList() {
    dispatch(actionCreators.getArticleList());
  },
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(mapState, mapDispatch)(List);
