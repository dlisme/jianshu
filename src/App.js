import React, { Component } from "react";
import Header from "./common/header";
import { GlobalIcon } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/home";
// 返回一个loadable异步组件
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";


class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header />
                <GlobalIcon />
                {/* BrowserRouter代表路由，route代表路由规则 */}

                {/* exact路径完全相等才显示 */}
                {/* <Route path='/' exact render={() => <div>home</div>}></Route> */}
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/write" exact component={Write}></Route>
                {/* 第一种带参方式 */}
                <Route path="/detail/:id" exact component={Detail}></Route>
                {/* 第二种带参方式，见list第二种 */}
                {/* <Route path="/detail" exact component={Detail}></Route> */}
              </div>
            </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
