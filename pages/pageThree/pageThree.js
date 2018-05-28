const app = getApp();

Page({
  data:{
    threeBgUrl:"url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageThree/threeBgImg.jpg')",
    musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png",
    pageThreeOneBoxBl:true,
    pageThreeTwoBoxBl:false,
    pageThreeThreeBoxBl:false,
    pageThreeFourBoxBl:false,
    pageThreeFiveBoxBl: false,
    pageThreeSixBoxBl: false,
    pageThreeSevenBoxBl: false,
    pageThreeEightBoxBl: false,
    threeMoreBox:false,
    pageYArr:[],
    pages: [
      "../pageOne/pageOne",
      "../pageTwo/pageTwo",
      "../pageFour/pageFour",
      "../pageFive/pageFive",
      "../pageSix/pageSix"
    ]

  },
  onShow: function () {

    wx.playBackgroundAudio({
      dataUrl: 'http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageThree/threeMusic.mp3'//(必要)音乐链接，目前支持的格式有 m4a, aac, mp3, wav
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
      if (that.data.pageThreeOneBoxBl == true && that.data.pageThreeTwoBoxBl == false) {
        that.setData({
          pageThreeOneBoxBl: false,
          pageThreeTwoBoxBl: true,
          pageThreeThreeBoxBl: false
        })
      } else if (that.data.pageThreeTwoBoxBl == true && that.data.pageThreeThreeBoxBl == false) {
        that.setData({
          pageThreeOneBoxBl: false,
          pageThreeTwoBoxBl: false,
          pageThreeThreeBoxBl: true
        })
      } else if (that.data.pageThreeThreeBoxBl == true && that.data.pageThreeFourBoxBl == false) {
        that.setData({
          pageThreeOneBoxBl: false,
          pageThreeTwoBoxBl: false,
          pageThreeThreeBoxBl: false,
          pageThreeFourBoxBl: true
        })
      } else if (that.data.pageThreeFourBoxBl == true && that.data.pageThreeFiveBoxBl == false) {
        that.setData({
          pageThreeFourBoxBl: false,
          pageThreeFiveBoxBl: true
        })
      } else if (that.data.pageThreeFiveBoxBl == true && that.data.pageThreeSixBoxBl == false) {
        that.setData({
          pageThreeFiveBoxBl: false,
          pageThreeSixBoxBl: true
        })
      } else if (that.data.pageThreeSixBoxBl == true && that.data.pageThreeSevenBoxBl == false) {
        that.setData({
          pageThreeSixBoxBl: false,
          pageThreeSevenBoxBl: true
        })
      } else if (that.data.pageThreeSevenBoxBl == true && that.data.pageThreeEightBoxBl == false) {
        that.setData({
          pageThreeSevenBoxBl: false,
          pageThreeEightBoxBl: true,
         
        })

      } else if (that.data.pageThreeEightBoxBl == true && that.data.threeMoreBox == false){
        that.setData({
          pageThreeEightBoxBl: false,
          threeMoreBox: true,
          threeBgUrl: "url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageThree/fourBgImg.jpg')"
        })
      }
    } else if (dataPageY[0] < dataPageY[dataPageY.length - 1] && difference < -20) {
      if (that.data.pageThreeOneBoxBl == false && that.data.pageThreeTwoBoxBl == true) {
        that.setData({
          pageThreeOneBoxBl: true,
          pageThreeTwoBoxBl: false,
          pageThreeThreeBoxBl: false
        })
      } else if (that.data.pageThreeTwoBoxBl == false && that.data.pageThreeThreeBoxBl == true) {
        that.setData({
          pageThreeOneBoxBl: false,
          pageThreeTwoBoxBl: true,
          pageThreeThreeBoxBl: false
        })
      } else if (that.data.pageThreeThreeBoxBl == false && that.data.pageThreeFourBoxBl == true) {
        that.setData({
          pageThreeTwoBoxBl: false,
          pageThreeThreeBoxBl: true,
          pageThreeFourBoxBl: false
        })
      } else if (that.data.pageThreeFourBoxBl == false && that.data.pageThreeFiveBoxBl == true) {
        that.setData({
          pageThreeThreeBoxBl: false,
          pageThreeFourBoxBl: true,
          pageThreeFiveBoxBl: false
        })
      } else if (that.data.pageThreeFiveBoxBl == false && that.data.pageThreeSixBoxBl == true) {
        that.setData({
          pageThreeFourBoxBl: false,
          pageThreeFiveBoxBl: true,
          pageThreeSixBoxBl: false
        })
      } else if (that.data.pageThreeSixBoxBl == false && that.data.pageThreeSevenBoxBl == true) {
        that.setData({
          pageThreeFiveBoxBl: false,
          pageThreeSixBoxBl: true,
          pageThreeSevenBoxBl: false
        })
      } else if (that.data.pageThreeSevenBoxBl == false && that.data.pageThreeEightBoxBl == true) {
        that.setData({
          pageThreeSixBoxBl: false,
          pageThreeSevenBoxBl: true,
          pageThreeEightBoxBl: false
        })
      } else if (that.data.pageThreeEightBoxBl == false && that.data.threeMoreBox == true){
        that.setData({
          pageThreeSevenBoxBl:false,
          pageThreeEightBoxBl:true,
          threeMoreBox:false,
          threeBgUrl: "url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageThree/threeBgImg.jpg')"
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