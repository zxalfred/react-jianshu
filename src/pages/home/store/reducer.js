import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },
    {
      id: 2,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },
    {
      id: 3,
      title: '简书电影',
      imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },
    {
      id: 4,
      title: '读书',
      imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    },
    {
      id: 5,
      title: '摄影',
      imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    },
    {
      id: 6,
      title: '旅行·在路上',
      imgUrl: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    },
    {
      id: 7,
      title: '人物',
      imgUrl: '//upload.jianshu.io/collections/images/56/Mypsd_176980_201208311721380003B.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp',
    },
  ],
  articleList: [
    {
      id: 1,
      title: '最美人间四月天，女建筑师林徽因罕见的9张照片！',
      abstract: '说起民国的才女，林徽因是一个绕不开的人物，她不但集美貌与智慧并存，就连婚姻也很美满。林徽因漂亮，并且多才多艺。她在文学、绘画、建筑、舞台设计等...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15705790-e0f2343a38cd4734.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 2,
      title: 'Python爬取校花网，妈妈再也不会担心我不给她发女朋友照片了',
      abstract: '本文同步发表于我的微信公众号，扫一扫文章底部的二维码或在微信搜索 极客导航 即可关注，每个工作日都有文章更新。 一、概况 上一篇我们用一个表情网...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/2137700-177efabedcb03663?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 3,
      title: '增肌八大黄金铁律',
      abstract: '增肌八大黄金铁律 大家好，我是你们的老朋友黄教练 很多朋友苦苦增肌，求而不得。心里没底，看着别人的肌肉线条，眼里充满了羡慕。到底是因为体...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/14903703-b034a152a27023af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 4,
      title: '性格内向，适合做销售吗？',
      abstract: '经常听人说，我性格内向，不适合做销售。因为我们对销售的印象，大都是热情大方，会说话，会控场，有底气，有魄力。 然而，很多销售人员，也觉得自己性格...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/5125924-cb6f5863304a76d6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
    },
    {
      id: 2,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png',
    },
    {
      id: 3,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png',
    },
    {
      id: 4,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
    },
    {
      id: 5,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
    },
    {
      id: 6,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
    },
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}
