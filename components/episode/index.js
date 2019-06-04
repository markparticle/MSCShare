// components/episode/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index: {
            type: Number,
            observer: function (newVal, oldVal, changePath) {
                let val = newVal < 10 ? '0' + newVal : newVal
                this.setData({
                    _index: val
                })
            }
        },
    },

    /**
     * 页面的初始数据
     */
    data: {
        months: [
            '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',
        ],
        year: 0,
        month: '',
        _index: '',
    },

    attached: function () {
        // console.log(this.properties)
        // console.log(this.data)
        let data = new Date()
        let year = data.getFullYear()
        let month = data.getMonth()

        this.setData({
            year,
            month: this.data.months[month]
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})