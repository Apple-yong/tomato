// pages/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    possword: "",
    isBinding: true
  },

  goToSignUp() {
    this.setData({ isBinding: false })
  },
  goToBinding() {
    this.setData({ isBinding: true })
  },
})