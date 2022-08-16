import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import './index.scss'
const app = Taro.getApp()

@withWeapp({
  data: {},
  onShareAppMessage: function() {
    return {
      title: '自定义转发标题',
      path: '/index/index?id=123'
    }
  },
  onLoad: function() {
    console.log(
      '代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：'
    )
    console.log(
      'https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html'
    )
  },
  onShow: function(opt) {
    console.log(opt)
  }
})
class _C extends React.Component {
  render() {
    return (
      <View className="intro">
        欢迎使用代码片段，可在控制台查看代码片段的说明和文档
      </View>
    )
  }
}

export default _C
