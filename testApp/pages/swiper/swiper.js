Page({
  data: {
    images: [
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      },
      {
        path: null,
        copyright: null,
        date: null,
        info: null,
        location: null
      }
    ]
  },
  onLoad: function(options) {

    this.setData({
      currentIndex: options.id
    })
// options传递的是上一层的对象

    var that = this

    for (var i = 0; i <= 7; i++) {
      let index = i;
      wx.request({
        url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + index + '&n=1&mkt=en-US',
        success: function (res) {

          var string = res.data.images[0].copyright;
          that.data.images[index].path = 'https://www.bing.com' + res.data.images[0].url;
          var date = res.data.images[0].enddate;



          var arr1 = string.split("，");
          that.data.images[index].info = arr1[0];
          var arr2 = (arr1[1] || "").split("(");
          that.data.images[index].location = arr2[0],
            that.data.images[index].copyright = (arr2[1] || "").substring(0, (arr2[1] || "").length - 1);
          var year = (date || "").substring(0, 4);
          var month = (date || "").substring(4, 6);
          var day = (date || "").substring(6, 8);
          that.data.images[index].date = year + "年" + month + "月" + day + "日",
            that.setData({
              images: that.data.images
            });
          // console.log(that.data.images[index].path + " " + that.data.images[index].info + " " + that.data.images[index].location + " " + that.data.images[index].copyright + " " + that.data.images[index].date)
          if (index == 7)
            wx.hideNavigationBarLoading()
        }
      })
    }

    wx.showNavigationBarLoading()
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