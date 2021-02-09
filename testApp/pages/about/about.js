Page({
  data:{
    start:"0"
  },
  music(event){
    if(event.timeStamp - this.data.start>3500)
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },
  tostart(e){
    this.setData({
      start : e.timeStamp
    })
  }
})