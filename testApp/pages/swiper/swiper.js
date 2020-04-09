const app=getApp()
Page({
  data: {
    images: [
    ]
  },
  onLoad: function(options) {

    this.setData({
      currentIndex: options.id
    })
// options传递的是上一层的对象

    this.setData({
      images: app.globalData.images
    })
    wx.showLoading({
      title: 'Loading',
    })
    wx.showNavigationBarLoading()
    if (app.globalData.cur == 8) {
      wx.hideNavigationBarLoading()
      wx.hideLoading()
    }
  },
 
  
  f0: function(event){
    this.setData({
      currentIndex: 0
    })
  },
  preview: function(event){
   
    wx.previewImage({
      urls: [this.data.images[7-event.currentTarget.dataset.index].path],
    })
  },

onShareAppMessage:function(event){
  console.log(event)
  return{
    title:"Recommend today wallpaper for you:"
  }
}




})
