// pages/classic/classic.js
import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'


let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * Page initial data
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
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
      this.setData({
        classicData: res
      })
    })
  },

  onLike: function(event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },
  
  onPrevious: function(event) {
    this._updateClassic('previous')
  },

  onNext: function(event) {
    this._updateClassic('next')
  },

  _updateClassic: function(nextOrPrevious){
    let index = this.data.classicData.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this.setData({
          classicData: res,
          latest: classicModel.isLatest(res.index),
          first: classicModel.isFirst(res.index)
      })
    })
  },

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