import {HTTP} from '../util/http.js' //相对路径
class ClassicModel extends HTTP {
    getLatest(sCallback){
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res)
            }
        })
        
    }
} 

export {ClassicModel}