import {HTTP} from '../util/http.js' //相对路径
class ClassicModel extends HTTP {
    getLatest(sCallback){
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index)
            }
        })
    }

    getClassic(index, nextOrPrevious,sCallback){
        this.request({
            url: 'classic/' + index + '/' + nextOrPrevious,
            success: (res) => {
                sCallback(res)
            }
        })
    }

    isFirst(index) {
        return index == 1 ? true : false
    }

    isLatest(index) {
        return this._getLatestIndex() == index ? true : false
    }

    _setLatestIndex(index) {
        wx.setStorageSync('latest', index) //同步写入
    }

    _getLatestIndex(inex) {
        return wx.getStorageSync('latest')
    }
} 

export {ClassicModel}