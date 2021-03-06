// pages/classic/classic.js
import {
    ClassicModel
} from '../../models/classic.js'

import {
    LikeModel
} from '../../models/like.js'


const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Page({

  /**
   * Page initial data
   */
  data: {
    classicData: null,
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false,
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
        classicData: res, //...res 扩展运算符
        likeCount: res.fav_nums,
        likeStatus: res.like_status,
      })
    })
  },

  onLike: function (event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },

  onPrevious: function (event) {
    this._updateClassic('previous')
  },

  onNext: function (event) {
    this._updateClassic('next')
  },

  _updateClassic: function (nextOrPrevious) {
    const index = this.data.classicData.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classicData: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus: function (artID, category) {
    likeModel.getClassicLikeStatus(artID, category,
      (res) => {
        this.setData({
          likeCount: res.fav_nums,
          likeStatus: res.like_status,
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