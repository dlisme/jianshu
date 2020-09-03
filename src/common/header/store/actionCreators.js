import * as actionTypes from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

// SearchInfoItem返回的对象不能是一个普通的js对象，而是一个函数，返回的结果是一个函数，必须使用redux-thunk这个中间件
// 获取数据并且改变store里面的数据时候redux里面的list，外面包裹了一个fromJS，会把里面的数组改变为一个immutable数组，想要改变该数组，直接改变，会把之前的immutable数组改变成一个普通的数组类型，所以就需要把action里面的data也转换为immutable数组，数组类型统一
// 
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('err');
        })
    }
};

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});
