// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "第一条信息",
    id: 0,
    condition: 6,
    name: 'MINA',
    object: {
      key: 'Hello '
    },
    array: ['MINA'],
    zero: 0,
    a: 1,
    b: 2,
    array1: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    str: "我是一条信息",
    obj:{ id:1 , text:"我是信息1" }
  },
  reverseTap(){
    this.setData({ str: this.data.str.split('').reverse().join('') })
  },
  changeText(){
    this.setData({ 'obj.text':'我是信息2' })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})