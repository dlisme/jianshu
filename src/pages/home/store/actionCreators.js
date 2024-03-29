// 获取数据，异步操作都放在此处
import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            // const action = {
            //     type: 'change_home_data',
            //     topicList: result.topicList,
            //     articleList: result.articleList,
            //     recommendList: result.recommendList
            // }
            // dispatch(action);

            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        console.log('click');
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
