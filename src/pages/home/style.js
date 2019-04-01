import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const HomeLeft = styled.div`
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  display: inline-flex;
  align-items: center;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  width: fit-content;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  .topic-img {
    width: 32px;
    height: 32px;
    display: inline-block;
    margin-right: 10px;
    border-radius: 4px 0 0 4px;
  }
`

export const MoreTopic = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 18px;
  color: #666;
  line-height: 32px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: space-between;
  .article-img {
    display: block;
    width: 125px;
    height: 100px;
    border-radius: 4px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .abstract {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align: center;
`
