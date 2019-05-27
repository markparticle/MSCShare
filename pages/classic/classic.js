// pages/classic/classic.js
import {HTTP} from '../../util/http.js'


let http = new HTTP()

Page({

  /**
   * Page initial data
   */
  data: {
    test:1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    http.request({
      url: 'classic/latest',
      success: (res) => {
        console.log(res)
      }
    })
    },
  //   wx.request({
  //     url: 'http://bl.7yue.pro/v1/classic/latest',
  //     header: {
  //       appkey: "RdshydjBvcYZhMZC"
  //     },
  //     success:(res) => {
  //       console.log(this.data.test)
  //     },
  //   })
  // },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})