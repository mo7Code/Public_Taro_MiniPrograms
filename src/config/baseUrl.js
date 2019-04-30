/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-26 16:01:28
 * @LastEditTime: 2019-05-01 00:42:38
 */

// let url = 'https://xcx.joywaygym.com'; //生产服
// let url = 'http://ip-27-joyway-app.coralcodes.com'; //测试服
let url = 'https://uat-xcx.joywaygym.com'; //UAT

export const baseUrl = url;

let H5_url = 'https://uat-xcx.joywaygym.com'; //内嵌H5页面的域名

export const WebView_domain = H5_url;

// let image_url = 'https://uat-xcx.joywaygym.com'; //小程序内引用图片的路径
let image_url = ''; //小程序内引用图片的路径

export const image_domain = image_url;

const versionList = [{
  version: '0.1.0',
  description: '创建项目',
}];

export const version = versionList[versionList.length - 1];
