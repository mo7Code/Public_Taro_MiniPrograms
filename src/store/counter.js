/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-30 23:46:00
 * @LastEditTime: 2019-05-01 00:42:20
 */
import { observable } from 'mobx';

const counterStore = observable({
  counter: 0,
  counterStore() {
    this.counter++;
  },
  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  },
});
export default counterStore;
