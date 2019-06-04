import {
    HTTP
} from '../util/http.js' //相对路径


class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
                this._setLatestIndex(res.index)
                let key = this._getKey(res.index)
                wx.setStorageSync(key, res)
            }
        })
    }

    getClassic(index, nextOrPrevious, sCallback) {
        let key = nextOrPrevious == 'next' ?
            this._getKey(index + 1) : this._getKey(index - 1)
        let classic = wx.getStorageSync(key)
        if (!classic) {
            this.request({
                url: `classic/${index}/${nextOrPrevious}`,
                success: (res) => {
                    wx.setStorageSync(this._getKey(res.index), res)
                    sCallback(res)
                }
            })
        } else {
            sCallback(classic)
        }
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

    _getLatestIndex() {
        return wx.getStorageSync('latest')
    }

    _getKey(index) {
        let key = 'classic-' + index
        return key
    }
}

export {
    ClassicModel
}