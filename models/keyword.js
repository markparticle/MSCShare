import {
    HTTP
} from '../util/http_promise.js'


class KeywordModel extends HTTP{
    key = 'q'
    maxLenght = 10

    getHistory() {
        const words = wx.getStorageSync(this.key) 
        if (!words) {
            return []
        } else {
            return words
        }
    }

    getHot() {
        return this.request({
            url: '/book/hot_keyword'
        })
    }

    addToHistory(keyword) {
        let words = this.getHistory()
        const has = words.includes(keyword)
        if(!has) {
            const length =  words.length
            if (length >= this.maxLenght) {
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync(this.key, words)
        }
    }
}

export {
    KeywordModel
}