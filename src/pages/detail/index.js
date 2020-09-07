import React from 'react';
import { DetailWrapper, Header, Content } from './style';
// 正在加载优化
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends React.Component {

    render(){
        // console.log(this.props.match.params.id,"lo"); 第一种带参方式，到此处取id
        // this.props.location.search 第二种带参方式到此处提取参数
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>   
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}


const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id){
        const action = actionCreators.getDetail(id);
        dispatch(action);
    }
});
// 让Detail有能力获取到router所有的参数和内容，异步组件
export default connect(mapState,mapDispatch)(withRouter(Detail));