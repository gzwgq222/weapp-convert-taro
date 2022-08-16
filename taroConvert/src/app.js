import { Block } from "@tarojs/components";
import React from "react";
import Taro from "@tarojs/taro";
import withWeapp from "@tarojs/with-weapp";

@withWeapp({
  onLaunch: function () {}
}, true)
class App extends React.Component {
  render() {
    return this.props.children;
  }

}

export default App;