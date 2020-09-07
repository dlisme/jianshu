import React from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends React.PureComponent {
    render(){
        const { list, getMoreList, page } = this.props;
        return(
            <div>
                {
                    list.map((item,index) => {
                        return (
                            // 不建议使用a标签，单页应用，只加载一次html标签，a标签加载多次，耗费性能
                            // <a key={index} href='/detail'>
                            // 第一种带参方式
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            {/* // 第二种带参方式 */}
                            {/* // <Link key={index} to={'/detail?id=' + item.get('id')}> */}
                                <ListItem key={index}>
                                    <img className="list-pic" 
                                    src={item.get('imgUrl')}
                                    alt=''
                                    />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>    
                            // </a>
                        )
                    })
                }

                <LoadMore onClick={() => getMoreList(page)}>
                    加载更多
                </LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    // list: state.get('home').get('articleList')
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])

})

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);