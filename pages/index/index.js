//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {

  },
  getScancode: function () {
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
    // console.log(111)
    // wx.scanCode({
    //   onlyFromCamera: true,
    //   success (res) {
    //     console.log(res)
    //   }
    // })
  }
})