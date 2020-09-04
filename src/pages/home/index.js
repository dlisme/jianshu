import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recomment from './component/Recomment';
import Writer from './component/Writer';
// import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends PureComponent {

  shouldComponentUpdate

  handleScrollTop(){
    window.scrollTo(0,0);
  }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                  <img className="banner-img"
                   src="https://pic1.zhimg.com/100/v2-6a10a01f1f02d536fad036d12500e558_hd.png"
                   alt=''
                  />
                  <Topic></Topic>
                  <List></List>
                </HomeLeft>
                <HomeRight>
                  <Recomment></Recomment>
                  <Writer></Writer>
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }

    componentDidMount(){
      this.props.changeHomeData();
      this.bindEvents();
    }

    // 组件销毁，绑定的全局事件销毁
    componentWillUnmount(){
      window.removeEventListener('scroll', this.props.changeScrollTopShow)        
    }

    bindEvents(){
      window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({

  changeHomeData(){
    // axios.get('/api/home.json').then((res) => {
    //   const result = res.data.data;
    //   const action = {
    //     type: 'change_home_data',
    //     topicList: result.topicList,
    //     articleList: result.articleList,
    //     recommendList: result.recommendList
    //   }
    //   dispatch(action);
    
    // })

    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },

  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});
export default connect(mapState, mapDispatch)(Home);

// 几乎每个组件都调用了connect方法和store做了连接
// 产生问题
// 只要store发生改变，每一个组件就会重新渲染
// 有些组件数据发生改变和另外的组件没有关系，但是这个组件依然会重新渲染
// 用shouldComponentUpdate做性能优化，与组件相关的数据发生改变，让该组件的render函数的执行
// 但是不能在每一个组件都使用shouldComponentUpdate， 可以用react内置的新的组件类型 PureComponent
// PureComponent会Component的区别，PureComponent底层实现了一个shouldComponentUpdate
