import React, {Component} from 'react';
import Header from './common/header';
import {GlobalIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <div>
          <Header/>
          <GlobalIcon/>
          {/* BrowserRouter代表路由，route代表路由规则 */}
          <BrowserRouter>
            <div>
            {/* exact路径完全相等才显示 */}
              {/* <Route path='/' exact render={() => <div>home</div>}></Route> */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      </>
    )
  }
}

export default App;
