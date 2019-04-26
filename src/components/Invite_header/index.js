/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-15 01:23:08
 * @LastEditTime: 2019-04-26 17:52:37
 */
import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './index.module.less';
import PropTypes from 'prop-types';

class Invite_header extends Component {
  static propTypes = {
    headerImg: PropTypes.string,
    venuesName: PropTypes.string,
    sportsType: PropTypes.string,
    userName: PropTypes.string,
    userIcon: PropTypes.string,
    date: PropTypes.string,
  };
  static defaultProps = {
    headerImg: 'https://meichangliang.github.io/static/image/life/sven.jpg',
    venuesName: '场馆名称',
    sportsType: '运动类型',
    userName: '包场人名字',
    userIcon: 'https://meichangliang.github.io/static/image/life/sven.jpg',
    date: 'xxx年xx月xxx日 星期x',
  };
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    const {
      headerImg,
      venuesName,
      sportsType,
      userName,
      userIcon,
    } = this.props;

    return (
      <View className={styles.Invite_header}>
        <View className={styles.header}>
          <Image className={styles.headerImg} src={headerImg} />
          <View className={styles.headerBar}>
            <View className={styles.name}>{venuesName}</View>
            <View className={styles.status}>{sportsType}</View>
          </View>
        </View>
        <View className={styles.tem}>
          <View className={styles.temBox}>
            <View className={styles.left}>
              <Image className={styles.userIcon} src={userIcon} />
              {userName}
            </View>
            <View className={styles.right}>
              <View className={styles.textRed}>{date}</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Invite_header;
