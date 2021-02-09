// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:[],
    name:'',
    resource:'',
    song:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  //    var data = ""

  
  // console.log(jsondata.replace("'",'"'))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.has = true
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  to:function(e){
    var that = this
    wx.navigateTo({
      url: '/pages/cur/cur?name='+that.data.name,
    })
  },

  towyyyy:function(e){
    wx.showLoading({
      title: '请等待',
    })
    var that = this
    wx.request({
      url: `https://dong12138.online/GetKuWoMusic/index.php/Home/Music/wyyyy`,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        name:that.data.name
      },
      success: function(res){
        wx.hideLoading()
         if(JSON.parse(res.data).msg == "请输入要解析的网易云歌曲ID"){
          wx.showToast({
            title: '请输入要解析的网易云歌曲ID',
            icon:'none'
          })
        }else if(JSON.parse(res.data).msg == "歌曲不存在"){
          wx.showToast({
            title: '歌曲不存在',
            icon:'none'
          })
        } else{
          wx.navigateTo({
            url: '/pages/listen/listen?resource='+JSON.parse(res.data).data.url+'&song='+JSON.parse(res.data).data.name,
          })
        }
      },
      fail (res){
        wx.showToast({
          title: '网络错误',
          icon:'none'
        })
        wx.hideLoading()
      }
    })
  },
  show:function(e){
    this.setData({
      name:e.detail.value
    })
  }
})