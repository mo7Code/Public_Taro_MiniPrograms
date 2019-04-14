import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import './index.less';

class Demo extends Component {
  config = {
    navigationBarTitleText: 'Demo',
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        这里是demo页面
        <Button>这里是demo页面 Button</Button>
        <Text className="text">这里是demo页面 Text</Text>
        路由:
      </View>
    );
  }
}

export default Demo;
