// 获取数据，异步操作都放在此处
import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: 'constants.CHANGE_HOME_DATA',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

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