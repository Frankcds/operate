// pages/pageSix/pageSix.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png",
    arr:[true,false,false,false,false,false,false,false],
    sixBgUrl:"url('http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageSix/pageSixBg.jpg')",
    pageYArr: [],
    pages: [
      "../pageOne/pageOne",
      "../pageTwo/pageTwo",
      "../pageThree/pageThree",
      "../pageFour/pageFour",
      "../pageFive/pageFive"
    ]
  },
  onShow: function () {

    wx.playBackgroundAudio({
      dataUrl: 'http://api.ool.vc/chargerbaby-admin-server-api/weixin/pageSix/pageSixMusic.mp3'//(必要)音乐链接，目前支持的格式有 m4a, aac, mp3, wav
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
    let that = this;
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
    let that = this
    let pageY = event.touches[0].pageY;
    let ty = pageY - that.data.lastY;
    that.data.pageYArr.push(event.touches[0].pageY);
  },
  //自定义上下滑函数
  upwardReplace: function (currentPage, nextPage) {
    let that = this;
    if (that.data.arr[currentPage] == true && that.data.arr[nextPage] == false) {
      const arrT = [false, false, false, false, false, false, false, false];
      arrT[currentPage] = false;
      arrT[nextPage] = true;
      that.setData({
        arr: arrT
      })

    }
  },
  leave: function () {
    let that = this
    let dataPageY = that.data.pageYArr;
    let difference = dataPageY[0] - dataPageY[dataPageY.length - 1];
    let upwardReplace = this.upwardReplace;
    let nowArr = that.data.arr;
    if (dataPageY[0] > dataPageY[dataPageY.length - 1] && difference > 20) {
      for (let index = 0; index <= nowArr.length - 1; index++) {
        if (nowArr[index] == true) {
          upwardReplace(index, index + 1);
        }
      }
    } else if (dataPageY[0] < dataPageY[dataPageY.length - 1] && difference < -20) {
      for (let index = 0; index <= nowArr.length - 1; index++) {
        if (nowArr[index] == true) {
          upwardReplace(index, index - 1);
        }
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
      title: '别太认真,别太假',
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