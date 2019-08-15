const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData
Page({
  data: {

  },
  onShow(){
    
  },
  login(e){
    let code;
    let iv = e.detail.iv;
    let encrypted_data = e.detail.encryptedData;
    wx.login({
      success: (res) => this.loginMe(res.code, iv, encrypted_data)
    })
  },
  loginMe(code, iv, encrypted_data) {
    http.post('/sign_in/mini_program_user', {
      code,
      iv,
      encrypted_data,
      app_id,
      app_secret,
    })
      .then(response => {
        this.saveMessage(response)
        wx.reLaunch({ url: "/pages/home/home" })
      })
  },
  saveMessage(response) {
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync('X-token', response.header["X-token"])
  }
})