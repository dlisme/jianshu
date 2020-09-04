import React from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recomment from './component/Recomment';
import Writer from './component/Writer';
// import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends React.Component {
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
            </HomeWrapper>
        )
    }

    componentDidMount(){
      this.props.changeHomeData();
    }
}

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
  }
});
export default connect(null, mapDispatch)(Home);