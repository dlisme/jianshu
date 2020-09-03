// 小笔记本整合成大的笔记本combineReducers
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// as取别名
import { reducer as headerReducer } from '../common/header/store';
// state是在该文件里面，把state也变成一个immutable对象，需要引入一个第三方的模块
// redux-immutable

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;
// export default combineReducers({
//     header: headerReducer
// })