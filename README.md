<!--
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-05 22:28:55
 * @LastEditTime: 2019-04-26 17:49:57
 -->

# Public_Taro_MiniProgram

官方文档 <https://nervjs.github.io/taro/docs/GETTING-STARTED.html>

## 运行方式

```bash

npm install -g @tarojs/cli
npm install

#微信小程序
npm run dev:weapp
npm run build:weapp

#百度小程序
npm run dev:swan
npm run build:swan

#支付宝小程序
npm run dev:alipay
npm run build:alipay

#字节跳动小程序
npm script
npm run dev:tt

#H5
npm run dev:h5
npm run build:h5

```

## 语法高亮和编辑器配置 `VSCode` 编辑器配置建议

插件安装建议

- ESLint
- ES7 React/Redux
- Prettier
- Path Intellisense

当前版本需要关闭修饰器警告

在 setting.json 中加入设置:

```json
  "javascript.implicitProjectConfig.experimentalDecorators": true
```

## 脚手架定制化

- 配置 CSS Modules
- 配置 less 支持

## 状态管理和页面通信

Mobx

文档地址
<https://cn.mobx.js.org/>

## 演示 demo

## 客户端本地存储

## 数据请求方法

## 实用工具库(待验证)

Lodash

文档地址
<https://www.lodashjs.com/>

引用官方推荐命名

```js
import _ from 'lodash';
import _ from 'lodash/core';
import fp from 'lodash/fp';
import array from 'lodash/array';
import object from 'lodash/fp/object';
import at from 'lodash/at';
import curryN from 'lodash/fp/curryN';
```

## 额外注意事项

`不支持在 render 生命周期之外编写 jsx`

`如果代码效果无法出现,请重新执行 npm start`

## 生命周期对应表

| 小程序            |          taro          |
| ----------------- | :--------------------: |
| Page.onLoad       |   componentWillMount   |
| onShow            |    componentDidShow    |
| onHide            |    componentDidHide    |
| onReady           |   componentDidMount    |
| onUnload          |  componentWillUnmount  |
| onError           | componentDidCatchError |
| App.onLaunch      |   componentWillMount   |
| Component.created |   componentWillMount   |
| attached          |   componentDidMount    |
| ready             |   componentDidMount    |
| detached          |  componentWillUnmount  |
| moved             |          保留          |

## js 模块引用的路径别名配置 `Webpack alias`

```js

  '@': path.resolve(__dirname, '..', 'src'),
  '@api': path.resolve(__dirname, '..', 'src/api'),
  '@components': path.resolve(__dirname, '..', 'src/components'),
  '@config': path.resolve(__dirname, '..', 'src/config'),
  '@images': path.resolve(__dirname, '..', 'src/images'),
  "@pages": path.resolve(__dirname, '..', 'src/pages'),
  '@store': path.resolve(__dirname, '..', 'src/store'),
  '@utils': path.resolve(__dirname, '..', 'src/utils'),

```

> css 暂不支持 , 在 app.js 中使用的样式会自动生效于全局
