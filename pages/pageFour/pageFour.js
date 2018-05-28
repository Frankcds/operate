Page({
  data:{
    musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png",
    fourBgUrl:"url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageFour/fourBgImg.jpg')",
    pageFourOneBoxBl:true,
    pageFourTwoBoxBl:false,
    pageFourThreeBoxBl:false,
    pageFourFourBoxBl:false,
    pageFourFiveBoxBl:false,
    pageFourSixBoxBl:false,
    pageFourSevenBoxBl:false,
    pageFourEightBoxBl:false,
    pageFourNightBoxBl:false,
    pageFourTenBoxBl:false,
    FourMoreBox:false,
    pageYArr: [],
    pages: [
      "../pageOne/pageOne",
      "../pageTwo/pageTwo",
      "../pageThree/pageThree",
      "../pageFive/pageFive",
      "../pageSix/pageSix"
    ]
  },
  onShow: function () {

    wx.playBackgroundAudio({
      dataUrl: 'http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageFour/fourMusic.mp3'//(必要)音乐链接，目前支持的格式有 m4a, aac, mp3, wav
      // title: '',//音乐标题
      // coverImgUrl: '',//封面URL
      // success/fail/complete: function(res) {//接口调用成功/失败/结束的回调函数
      // }
    })
    wx.playBackgroundAudio();
    this.setData({
      isPlayingMusic: true,
      musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/playMusic.png"
    })
  },
  /**当小程序隐藏时候 */
  onHide: function () {
    wx.pauseBackgroundAudio();
    this.setData({
      isPlayingMusic: false,
      musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/suspendMusic.png"
    })
  },
  transformImg: function () {
    const that = this;
    if (that.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/suspendMusic.png"
      })
    } else {
      wx.playBackgroundAudio();
      this.setData({
        isPlayingMusic: true,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png"
      })
    }
  },
  //上下滑动判断
  myToucheMove: function (event) {
    const that = this
    const pageY = event.touches[0].pageY;
    const ty = pageY - that.data.lastY;
    that.data.pageYArr.push(event.touches[0].pageY);
  },
  leave: function () {
    const that = this
    const dataPageY = that.data.pageYArr;
    const difference = dataPageY[0] - dataPageY[dataPageY.length - 1];
    if (dataPageY[0] > dataPageY[dataPageY.length - 1] && difference > 20) {
      if (that.data.pageFourOneBoxBl == true && that.data.pageFourTwoBoxBl == false) {
        that.setData({
          pageFourOneBoxBl: false,
          pageFourTwoBoxBl: true,
          pageFourThreeBoxBl: false
        })
      } else if (that.data.pageFourTwoBoxBl == true && that.data.pageFourThreeBoxBl == false) {
        that.setData({
          pageFourOneBoxBl: false,
          pageFourTwoBoxBl: false,
          pageFourThreeBoxBl: true
        })
      } else if (that.data.pageFourThreeBoxBl == true && that.data.pageFourFourBoxBl == false) {
        that.setData({
          pageFourOneBoxBl: false,
          pageFourTwoBoxBl: false,
          pageFourThreeBoxBl: false,
          pageFourFourBoxBl: true
        })
      } else if (that.data.pageFourFourBoxBl == true && that.data.pageFourFiveBoxBl == false) {
        that.setData({
          pageFourFourBoxBl: false,
          pageFourFiveBoxBl: true
        })
      } else if (that.data.pageFourFiveBoxBl == true && that.data.pageFourSixBoxBl == false) {
        that.setData({
          pageFourFiveBoxBl: false,
          pageFourSixBoxBl: true
        })
      } else if (that.data.pageFourSixBoxBl == true && that.data.pageFourSevenBoxBl == false) {
        that.setData({
          pageFourSixBoxBl: false,
          pageFourSevenBoxBl: true
        })
      } else if (that.data.pageFourSevenBoxBl == true && that.data.pageFourEightBoxBl == false) {
        that.setData({
          pageFourSevenBoxBl: false,
          pageFourEightBoxBl: true,

        })

      } else if (that.data.pageFourEightBoxBl == true && that.data.pageFourNightBoxBl == false) {
        that.setData({
          pageFourEightBoxBl: false,
          pageFourNightBoxBl: true,

        })

      } else if (that.data.pageFourNightBoxBl == true && that.data.pageFourTenBoxBl == false) {
        that.setData({
          pageFourNightBoxBl: false,
          pageFourTenBoxBl: true,

        })

      } else if (that.data.pageFourTenBoxBl == true && that.data.FourMoreBox == false) {
        that.setData({
          pageFourTenBoxBl: false,
          FourMoreBox: true,
          fourBgUrl: "url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageFour/fourMoreBg.jpg')"
        })
      }
    } else if (dataPageY[0] < dataPageY[dataPageY.length - 1] && difference < -20) {
      if (that.data.pageFourOneBoxBl == false && that.data.pageFourTwoBoxBl == true) {
        that.setData({
          pageFourOneBoxBl: true,
          pageFourTwoBoxBl: false,
          pageFourThreeBoxBl: false
        })
      } else if (that.data.pageFourTwoBoxBl == false && that.data.pageFourThreeBoxBl == true) {
        that.setData({
          pageFourOneBoxBl: false,
          pageFourTwoBoxBl: true,
          pageFourThreeBoxBl: false
        })
      } else if (that.data.pageFourThreeBoxBl == false && that.data.pageFourFourBoxBl == true) {
        that.setData({
          pageFourTwoBoxBl: false,
          pageFourThreeBoxBl: true,
          pageFourFourBoxBl: false
        })
      } else if (that.data.pageFourFourBoxBl == false && that.data.pageFourFiveBoxBl == true) {
        that.setData({
          pageFourThreeBoxBl: false,
          pageFourFourBoxBl: true,
          pageFourFiveBoxBl: false
        })
      } else if (that.data.pageFourFiveBoxBl == false && that.data.pageFourSixBoxBl == true) {
        that.setData({
          pageFourFourBoxBl: false,
          pageFourFiveBoxBl: true,
          pageFourSixBoxBl: false
        })
      } else if (that.data.pageFourSixBoxBl == false && that.data.pageFourSevenBoxBl == true) {
        that.setData({
          pageFourFiveBoxBl: false,
          pageFourSixBoxBl: true,
          pageFourSevenBoxBl: false
        })
      } else if (that.data.pageFourSevenBoxBl == false && that.data.pageFourEightBoxBl == true) {
        that.setData({
          pageFourSixBoxBl: false,
          pageFourSevenBoxBl: true,
          pageFourEightBoxBl: false
        })
      } else if (that.data.pageFourEightBoxBl == false && that.data.pageFourNightBoxBl == true) {
        that.setData({
          pageFourSevenBoxBl: false,
          pageFourEightBoxBl: true,
          pageFourNightBoxBl: false
        })
      } else if (that.data.pageFourNightBoxBl == false && that.data.pageFourTenBoxBl == true) {
        that.setData({
          pageFourSixBoxBl: false,
          pageFourNightBoxBl: true,
          pageFourTenBoxBl: false
        })
      } else if (that.data.pageFourEightBoxBl == false && that.data.FourMoreBox == true) {
        that.setData({
          pageFourNightBoxBl: false,
          pageFourTenBoxBl: true,
          FourMoreBox: false,
          fourBgUrl: "url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageFour/fourBgImg.jpg')"
        })
      }
    }
    that.setData({
      pageYArr: []
    })
  },
  /*跳转到更多页*/
  moreRoute: function (event) {
    let that = this;
    let random = Math.round(Math.random() * 4);
    console.log(random);
    wx.navigateTo({
      url: that.data.pages[random],
      success: function (res) {

      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '人,走着走着便懂了',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})