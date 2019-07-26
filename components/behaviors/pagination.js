const paginationBev = Behavior({
  properties: {

  },

  data: {
    dataArray: [],
    total: 0,
    noneResult: false,
    loading: false,
  },

  methods: {
    setMoreData: function (dataArray) {
      const tempArray = this.data.dataArray.concat(dataArray)
      this.setData({
        dataArray: tempArray
      })
    },

    setTotal(total) {
      if (total == 0) {
        this.setData({
          noneResult: true,
        })
      }
      return this.data.total = total
    },

    hasMore: function () {
      if (this.data.dataArray.length >= this.data.total) {
        return false
      } else {
        return true
      }
    },

    getCurrentStart: function () {
      return this.data.dataArray.length
    },

    initPagination: function () {
      this.data.total = 0
      this.setData({
        dataArray: [],
        noneResult: false,
        loading: false,
      })
    },


    isLocked() {
      return this.data.loading ? true : false
    },

    locked() {
      this.setData({
        loading: true
      })
    },

    unLocked() {
      this.setData({
        loading: false
      })
    },
  }
})


export {
  paginationBev
}