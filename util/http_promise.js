import {
    config
} from '../config.js'


const tips = {
    1: '抱歉，出现了一个错误',
    1005: 'appkey无效',
    3000: '期刊不存在',
}

// 纯粹callback 回调地狱 每次调用都需要带回调函数 无return
// promise 代码风格 多个异步等待合并 对象(保存状态)
// async await (promise语法糖) es2017 最佳方案 小程序暂不支持
// 一次调用 多次调用API 链式调用 3个API API1 API2 API3
class HTTP {
    // 解构
    request({url, data = {}, method = 'GET'}) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }
    _request(url, resolve, reject, data = {}, method = 'GET') {
        wx.request({
            url: config.api_base_url + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                const code = res.statusCode.toString()
                if (code.startsWith('2')) {
                    resolve(res.data)
                } 
                else {
                    //服务器异常
                    reject()
                    const error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail: (err) => {
                //调用失败 
                reject
                this._show_error(1)
            }
        })
    }

    _show_error(error_code) {
        if (!error_code) {
            error_code = 1
        }
        const tip = tips[error_code]
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: 'none',
            duration: 2000
        })
    }
}

export {
    HTTP
}