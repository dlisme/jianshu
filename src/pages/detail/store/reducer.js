import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    title: '衡水中学，被外地人占领的高考工厂',
    content: '<img src="http://upload-images.jianshu.io/upload_images/16647262-ab50d40ea017230a.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp" alt="" /><p>我的抖音大号已经积累了两万粉丝，并且稳定增长中，同时我也开了小号，准备做另一个方向。</p><p>我的抖音大号已经积累了两万粉丝，并且稳定增长中，同时我也开了小号，准备做另一个方向。</p><p>我的抖音大号已经积累了两万粉丝，并且稳定增长中，同时我也开了小号，准备做另一个方向。</p><p>我的抖音大号已经积累了两万粉丝，并且稳定增长中，同时我也开了小号，准备做另一个方向。</p>',
    
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
};
