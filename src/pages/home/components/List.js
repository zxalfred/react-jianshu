import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ListItem,
  ListInfo,
} from '../style';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <Fragment key={item.get('id')}>
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
});

const mapDispatch = (dispacth) => ({
  getArticleList() {
    const action = actionCreators.getArticleList();
    dispacth(action);
  }
});

export default connect(mapState, mapDispatch)(List);
