const app = getApp()
Page({
  data:{
    images:[]
  },
  onLoad: function(options) {
    this.setData({
      images:app.globalData.images
    })
    wx.showLoading({
      title: 'Loading',
    })
    wx.showNavigationBarLoading()
    if (app.globalData.cur==8){
      wx.hideNavigationBarLoading()
      wx.hideLoading()
    }
  },

  methodTo: function(event) {
    var wallpaperId = event.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/swiper/swiper?id=' + wallpaperId,
    })
  },

  onShareAppMessage: function() {
    return {
      title: "Weekly Wallpaper"
    }
  }
})
