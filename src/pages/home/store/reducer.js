import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
    // topicList: [{
    //     id: 1,
    //     title: '社会热点',
    //     imgUrl: 'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // },{
    //     id: 2,
    //     title: '手绘',
    //     imgUrl: 'https://pic1.zhimg.com/100/v2-6a10a01f1f02d536fad036d12500e558_hd.png'
    // }],
    // articleList: [{
    //     id: 1,
    //     title: '且行且珍惜',
    //     desc: '来自一位老夫少妻的自述',
    //     imgUrl: 'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // },{
    //     id: 2,
    //     title: '且行且珍惜',
    //     desc: '来自一位老夫少妻的自述',
    //     imgUrl: 'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // },{
    //     id: 3,
    //     title: '且行且珍惜',
    //     desc: '来自一位老夫少妻的自述',
    //     imgUrl: 'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // },{
    //     id: 4,
    //     title: '且行且珍惜',
    //     desc: '来自一位老夫少妻的自述',
    //     imgUrl: 'https://upload.jianshu.io/users/upload_avatars/278/0778727c-c557-4ffb-929c-6ee182a58145.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    // }],
    // recommendList: [{
    //     id: 1,
    //     imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    // },{
    //     id: 2,
    //     imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    // },{
    //     id: 3,
    //     imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    // },{
    //     id: 4,
    //     imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    // }]
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    })
}

const addHomeList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_HOME_LIST:
            return addHomeList(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
};
