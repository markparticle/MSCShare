// components/classic/music/index.js
import {
    classicBeh
} from "../classic-beh.js"


const mMgr = wx.getBackgroundAudioManager() //音乐管理对象

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [classicBeh],
    properties: {
        musicSrc: String,
        musicTitle: String,
    },
    /**
     * 组件的初始数据
     */
    data: {
        playing: false,
        pauseSrc: 'images/player@pause.png',
        playSrc: 'images/player@play.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay: function (event) {
            if (!this.properties.playing) {
                this.setData({
                    playing: true,
                })
                mMgr.src = this.properties.musicSrc
                mMgr.title = this.properties.musicTitle
            } else {
                this.setData({
                    playing: false,
                })
                mMgr.pause()
            }
        },

        _recoverPlaying: function () {
            if (mMgr.paused) {
                this.setData({
                    playing: false
                })
                return
            }
            if (!mMgr.paused & mMgr.src == this.properties.musicSrc) {
                this.setData({
                    playing: true
                })

            }
        },

        _monitorSwitch: function () {
            mMgr.onPlay(() => {
                this._recoverPlaying()
            })
            mMgr.onPause(() => {
                this._recoverPlaying()
            })
            mMgr.onStop(() => {
                    this._recoverPlaying()
                }),
                mMgr.onEnded(() => {
                    this._recoverPlaying()
                })
        }
    },

    //wx:if触发
    detached: function (event) {
        // mMgr.stop()
    },

    attached: function (event) {
        this._recoverPlaying()
        this._monitorSwitch()
    },


})