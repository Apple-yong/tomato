// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSecond: 1500,
    time: "",
    timer: null,
    stop: false,
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.startTimer()
  },
  startTimer(){
    this.setData({ stop: true })
    this.changeTime()
    this.timer = setInterval(() => {
      this.data.defaultSecond--
      this.changeTime()
      if (this.data.defaultSecond === 0) {
        this.setData({ againButtonVisible: true })
        this.setData({ finishConfirmVisible: true })
        return this.clearTimer()
      }
    }, 1000)
  },
  clearTimer(){
    clearInterval(this.timer)
    this.timer = null
    this.setData({ stop: false })
  },
  againTimer() {
    this.data.defaultSecond = 1500
    this.setData({ againButtonVisible: false })
    this.startTimer()
  },
  changeTime(){
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond%60)
    if(s == 0){
      s = '00'
    }
    if((s+"").length === 1){
      s = "0" +s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }
    this.setData({ time: `${m}:${s}` })
  },
  confirmAbandon(event){
    let content = event.detail
    wx.navigateBack({
      to: -1
    })
  },
  confirmFinish(event) {
    let content = event.detail
    console.log(content)
  },
  showConfirm(){
    this.setData({ confirmVisible: true })
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({ confirmVisible: false })
    this.startTimer()
  },
  
  finishConcel(){
    this.setData({ finishConfirmVisible: false })
  },
  onHide: function () {

  },

  
  onUnload: function () {

  }
})