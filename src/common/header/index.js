import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, SearchInfo, SearchInfoTitle, SearchInfoList, SearchInfoItem, SearchInfoSwitch, Addition, Button } from "./style";
import { connect } from 'react-redux';
// import  * as actionCreators  from './store/actionCreators';
import { actionCreators } from './store';
import { Link } from "react-router-dom";

// 无状态组件
// const Header = (props) => {

// }

// const getListArea = (show) => {
//   if (show) {
//     return (
//     <SearchInfo>
//       <SearchInfoTitle>
//         热门搜索
//         <SearchInfoSwitch>
//           换一批
//         </SearchInfoSwitch>
//       </SearchInfoTitle>
//       <SearchInfoList>
//         <SearchInfoItem>
//           教育
//         </SearchInfoItem>
//       </SearchInfoList>
//     </SearchInfo>
//     )
//   } else {
//     return null;
//   }
// }

class Header extends Component {
  // constructor(props){
  //   super(props);
  // }

  getListArea(){
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i = (page - 1) * 10; i < page * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
      <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>
            首页
          </NavItem>
          <NavItem className='left'>
            下载App
          </NavItem>
          <NavItem className='right'>
            登录
          </NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
                <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                >

                </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
            {this.getListArea(focused )}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

}

// 取数据
const mapStateToProps = (state) => {
    return {
      // immutable对象, state也变成了一个immutable对象
      focused: state.getIn(['header', 'focused']),
      list: state.getIn(['header', 'list']),
      page: state.getIn(['header', 'page']),
      totalPage: state.getIn(['header', 'totalPage']),
      mouseIn: state.getIn(['header', 'mouseIn']),
    }
    // focused: state.get('header').get('focused') 这种方式等价于以上方法
    // focused: state.header.get('focused')
    // focused: state.header.focused;
}

// 改数据
const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            // const action = {
            //     type: 'search_focus'
            // }
            // 请求的数据放到redux-thunk中间件里面actions或者redux-saga里面进行处理

            // 避免多次无意义的发送ajax请求
            if(list.size === 0){
              dispatch(actionCreators.getList());
            }
            // (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            // const action = {
            //     type: 'search_blur'
            // }
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
          dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
          dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin){
          let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
          if(originAngle){
            originAngle = parseInt(originAngle, 10);
          }else{
            originAngle = 0;
          }

          spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
          if( page < totalPage){
            dispatch(actionCreators.changePage(page + 1));
          } else {
            dispatch(actionCreators.changePage(1));
          }
        }

    }
}

export default connect(mapStateToProps, mapDispathToProps) (Header);
