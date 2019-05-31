// components/navi/navi.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: String,
        first: Boolean,
        latest: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {
        disLeftSrc: 'images/triangle.dis@left.png',
        leftSrc: 'images/triangle@left.png',
        disRightftSrc: 'images/triangle.dis@right.png',
        rightSrc: 'images/triangle@right.png',
    },

    /**
     * 组件的方法列表
     */ 
    methods: {
        onLeft: function(event){
            if (!this.properties.latest){
                this.triggerEvent('left', {}, {})
            }
        },
        onRight: function(event){
            if (!this.properties){
                this.triggerEvent('right', {}, {})
            }            
        },        
    }
})
