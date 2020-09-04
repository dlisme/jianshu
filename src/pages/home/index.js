import React from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recomment from './component/Recomment';
import Writer from './component/Writer';
// import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends React.Component {
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