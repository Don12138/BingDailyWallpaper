 App({
  globalData: {
    images: [{
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
    ],
    cur:0
  },
  onLaunch: function () {
    var that=this;
    for (var i = 0; i <= 7; i++) {
      let index = i;
      wx.request({
        url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + index + '&n=1&mkt=en-US',
        success: function (res) {

          var string = res.data.images[0].copyright;
          that.globalData.images[index].path = 'https://www.bing.com' + res.data.images[0].url;
          var date = res.data.images[0].enddate;

          
          if (string.charAt(0) =='【'){
            var arr1 = string.split("】")
            that.globalData.images[index].info=arr1[0].substring(1,arr1[0].length)
          }else{
            var arr1 = string.split("，");
          that.globalData.images[index].info = arr1[0];
          }
          var arr2 = (arr1[1] || "").split("(");
          that.globalData.images[index].location = arr2[0],
            that.globalData.images[index].copyright = (arr2[1] || "").substring(0, (arr2[1] || "").length - 1);
          var year = (date || "").substring(0, 4);
          var month = (date || "").substring(4, 6);
          var day = (date || "").substring(6, 8);
          that.globalData.images[index].date = year + "年" + month + "月" + day + "日";
          that.globalData.cur++;
        }

      })
    }
    
  }
})
