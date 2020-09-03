import React, {Component} from 'react';
import Header from './common/header';
import {GlobalIcon} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';

class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <div>
          <Header/>
          <GlobalIcon/>
          <BrowserRouter>
            <div>
            {/* exact路径完全相等才显示 */}
              <Route path='/' exact render={() => <div>home</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
      </>
    )
  }
}

export default App;
