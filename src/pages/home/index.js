import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'

import './index.less';

@connect(state => state.home, { ...actions })

class Index extends Component {

  config = {
    navigationBarTitleText: '首页11'
  };

  componentDidMount() {
    this.props.dispatchHome().then((res) => {
      console.log(res)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
