import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from '../style';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              // can't use index as key value in reality
              <Link key={index} to="/detail">
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
              </Link>
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
