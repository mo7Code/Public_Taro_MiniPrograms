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
