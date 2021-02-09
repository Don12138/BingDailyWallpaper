const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resource: '',
    stop:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      resource: options.resource,
      song:options.song
    })

    innerAudioContext.autoplay = true
    innerAudioContext.src = this.data.resource
    innerAudioContext.loop = true;
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    innerAudioContext.pause()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.pause()
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
  change:function(e){
    if(this.data.stop){
      innerAudioContext.play();
    }else{
      innerAudioContext.pause();
    }
    this.setData({
      stop:!this.data.stop
    })
  },
  copy:function(e){
    var that = this
        wx.setClipboardData({
          data: 'https://dong12138.online/GetKuWoMusic/index.php/Home/Music/download?name='+that.data.song+"&resource="+that.data.resource
        })


  }
})