const app = getApp();

Page({
  data:{
    musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/playMusic.png",
    pageTone:true,
    pageTTwo:false,
    pageTThree:false,
    pageTFour:false,
    pageTFive:false,
    pageTSix:false,
    pageTSeven:false,
    pageTEight:false,
    twoMoreBox:false,
    twoBgUrl: "",
    pageYArr:[],
    pages: [
      "../pageOne/pageOne",
      "../pageThree/pageThree",
      "../pageFour/pageFour",
      "../pageFive/pageFive",
      "../pageSix/pageSix"
    ]
  },
  onLoad:function(){
    const that = this;
    if (that.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/suspendMusic.png"
      })
    } else {
      wx.playBackgroundAudio();
      this.setData({
        isPlayingMusic: true,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/playMusic.png"
      })
    }
  },
  /**当小程序显示时 */
  onShow:function(){
    const that = this;
    wx.playBackgroundAudio();
    this.setData({
      isPlayingMusic: true,
      musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/playMusic.png"
    })
  },
  /**当小程序隐藏时候 */
  onHide: function () {
    const that = this;
    wx.pauseBackgroundAudio();
    this.setData({
      isPlayingMusic: false,
      musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/suspendMusic.png"
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '你若懂我,该有多好',
      path: '/page/user?id=123',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  transformImg: function () {
    const that = this;
    if (that.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/suspendMusic.png"
      })
    } else {
      wx.playBackgroundAudio();
      this.setData({
        isPlayingMusic: true,
        musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/playMusic.png"
      })
    }
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
  /*音乐部分*/
  onShow: function () {
    
    wx.playBackgroundAudio({
      dataUrl: 'http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/pageTwoMusic.mp3'//(必要)音乐链接，目前支持的格式有 m4a, aac, mp3, wav
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
      if (that.data.pageTone == true && that.data.pageTTwo == false) {
        that.setData({
          pageTone: false,
          pageTTwo: true,
          pageTThree: false
        })
      } else if (that.data.pageTTwo == true && that.data.pageTThree == false) {
        that.setData({
          pageTone: false,
          pageTTwo: false,
          pageTThree: true
        })
      } else if (that.data.pageTThree == true && that.data.pageTFour == false) {
        that.setData({
          pageTone: false,
          pageTTwo: false,
          pageTThree: false,
          pageTFour: true
        })
      } else if (that.data.pageTFour == true && that.data.pageTFive == false) {
        that.setData({
          pageTFour: false,
          pageTFive: true
        })
      } else if (that.data.pageTFive == true && that.data.pageTSix == false) {
        that.setData({
          pageTFive: false,
          pageTSix: true
        })
      } else if (that.data.pageTSix == true && that.data.pageTSeven == false) {
        that.setData({
          pageTSix: false,
          pageTSeven: true
        })
      } else if (that.data.pageTSeven == true && that.data.pageTEight == false) {
        that.setData({
          pageTSeven: false,
          pageTEight: true
        })

      } else if (that.data.pageTEight == true && that.data.twoMoreBox == false) {
        that.setData({
          pageTEight: false,
          twoMoreBox: true,
          twoBgUrl: "url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageTwo/girlBGImg.jpg')"
        })

      }
    } else if (dataPageY[0] < dataPageY[dataPageY.length - 1] && difference < -20) {
      if (that.data.pageTone == false && that.data.pageTTwo == true) {
        that.setData({
          pageTone: true,
          pageTTwo: false,
          pageTThree: false
        })
      } else if (that.data.pageTTwo == false && that.data.pageTThree == true) {
        that.setData({
          pageTone: false,
          pageTTwo: true,
          pageTThree: false
        })
      } else if (that.data.pageTThree == false && that.data.pageTFour == true) {
        that.setData({
          pageTTwo: false,
          pageTThree: true,
          pageTFour: false
        })
      } else if (that.data.pageTFour == false && that.data.pageTFive == true) {
        that.setData({
          pageTThree: false,
          pageTFour: true,
          pageTFive: false
        })
      } else if (that.data.pageTFive == false && that.data.pageTSix == true) {
        that.setData({
          pageTFour: false,
          pageTFive: true,
          pageTSix: false
        })
      } else if (that.data.pageTSix == false && that.data.pageTSeven == true) {
        that.setData({
          pageTFive: false,
          pageTSix: true,
          pageTSeven: false
        })
      } else if (that.data.pageTSeven == false && that.data.pageTEight == true) {
        that.setData({
          pageTSix: false,
          pageTSeven: true,
          pageTEight: false
        })
      } else if (that.data.pageTSeven == false && that.data.twoMoreBox == true) {
        that.setData({
          pageTSeven: false,
          pageTEight: true,
          twoMoreBox: false,
          twoBgUrl:""
        })
      }
    }
    that.setData({
      pageYArr: []
    })
  },
  /*跳转回更多页*/
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
})