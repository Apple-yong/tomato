const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData
Page({
  data: {

  },
  onShow(){
    http.get('/todos')
  }
})