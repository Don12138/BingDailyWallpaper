// pages/cur/cur.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songList:[],
    has:false,
    name:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请等待',
    })
    this.setData({
      name:options.name
    })
    var that = this
    wx.request({
      url: `https://dong12138.online/GetKuWoMusic/index.php/Home/Music/getKuWo`,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        name:that.data.name
      },
      success: function(res){
        wx.hideLoading()
        var data = res.data;
        data = data.replace('try{var jsondata=','');
        data = data.replace('; song(jsondata);}catch(e){jsonError(e)}','')
        data = data.replace(/'/g,'"');
        if(JSON.parse(data).abslist.length!=0){
          that.setData({
            has:true,
            songList:JSON.parse(data).abslist
          })
        }else{
        }
      }
    })
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
    var that = this
    wx.request({
      url: `https://dong12138.online/GetKuWoMusic/index.php/Home/Music/getKuWo`,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        name:that.data.name
      },
      success: function(res){
        var data = res.data;
        data = data.replace('try{var jsondata=','');
        data = data.replace('; song(jsondata);}catch(e){jsonError(e)}','')
        data = data.replace(/'/g,'"');
        if(JSON.parse(data).abslist.length!=0){
          that.setData({
            has:true,
            songList:JSON.parse(data).abslist
          })
        }else{
        }
      }
    })
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
  choose:function(e){
    var that = this
    var cur = this.data.songList[e.currentTarget.dataset.index].MP3RID.replace('MP3_','')
    this.setData({
      song:  this.data.songList[e.currentTarget.dataset.index].NAME
    })
    var data = "http://antiserver.kuwo.cn/anti.s?response=url&rid=MUSIC_"+cur+"%22&format=mp3&type=convert_url"
    wx.request({
      url: `https://dong12138.online/GetKuWoMusic/index.php/Home/Music/getKuWo2`,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        url:data
      },
      success: function(res){
        console.log(res.data)
        that.setData({
          resource : res.data
        })
        wx.navigateTo({
          url: '/pages/listen/listen?resource='+that.data.resource+'&song='+that.data.song,
        })
      }
    })
  }
})