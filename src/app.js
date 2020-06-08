import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Home from './pages/home'
import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1b9dff',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './assets/tab-bar/home.png',
          selectedIconPath: './assets/tab-bar/home-active.png'
        },
        {
          pagePath: 'pages/home/index',
          text: '首页1',
          iconPath: './assets/tab-bar/home.png',
          selectedIconPath: './assets/tab-bar/home-active.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
