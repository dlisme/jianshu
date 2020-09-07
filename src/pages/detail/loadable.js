import React from 'react';
import Loadable from 'react-loadable';

// 异步组件, 异步加载的需求

const LoadableComponent = Loadable({
  loader: () => import('./'),
//   加载时返回的内容，返回的必须是个函数
  loading() {
      return <div>正在加载</div>
  },
});

// 默认导出一个无状态组件
export default () => <LoadableComponent/>

// 还得改一下App.js里面的东西

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }