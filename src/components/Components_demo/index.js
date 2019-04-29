/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-15 01:23:08
 * @LastEditTime: 2019-04-28 17:01:40
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.less';

class Components_demo extends Component {
  static propTypes = {
    list: PropTypes.array,
  };
  static defaultProps = {
    list: [
      {
        cover: 'https://meichangliang.github.io/static/image/life/sven.jpg',
        title:
          '这里是title,这里是title,这里是title,这里是title,这里是title,这里是title,',
        lb_text: '这里是左边的数据',
        rb_text: '右边的数据',
      },
      {
        cover: 'https://meichangliang.github.io/static/image/life/sven.jpg',
        title:
          '这里是title,这里是title,这里是title,这里是title,这里是title,这里是title,',
        lb_text: '这里是左边的数据',
        rb_text: '右边的数据',
      },
    ],
  };
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const { list } = this.props;

    return (
      <View className="wrapper">
        这里是一个组件
        {list.map((item, index) => {
          return <View key={index}>{item.title}</View>;
        })}
      </View>
    );
  }
}

export default Components_demo;
