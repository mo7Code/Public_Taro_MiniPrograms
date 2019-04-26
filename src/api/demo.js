/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-26 15:34:47
 * @LastEditTime: 2019-04-26 15:49:02
 */
import { ajax, baseUrl } from '../utils/http';

export const postBlockPay = data => {
  /**
   * @description: 一般的接口处理方式
   */
  return ajax({
    url: '/u/order/blockPay',
    data,
    method: 'post',
  });
};

export const getOderDetail = data => {
  /**
   * @description: 负责接口需要进行数据map的
   */
  return new Promise(function(resolve, reject) {
    ajax({
      url: '/u/order/blockDetail',
      data,
      method: 'get',
    })
      .then(res => {
        const data = filter(res);
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });

  function filter(res) {
    const data = res.data;
    //数据处理函数
    const venuesHomeImage = data.venuesHomeImage;
    const cover_HomeImage = baseUrl + JSON.parse(venuesHomeImage)[0].file;
    data.cover_HomeImage = cover_HomeImage;

    return data;
  }
};
