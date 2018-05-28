//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    oneBoxBl:true,
    oneBoxOne:true,
    musicImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png",
    isPlayingMusic:true,
    lastY:0,
    pageYArr:[],
    twoBoxBl:false,
    threeBoxBl:false,
    fourBoxBl: false,
    fiveBoxBl:false,
    sixBoxBl:false,
    sevenBoxBl:false,
    lastBoxBl:false,
    bgUrl: "url('http://qty83k.creatby.com/materials/103419/origin/78df8ceeab433f96813633e3dac98401_origin.jpg')",
    pages:[
      "../pageTwo/pageTwo",
      "../pageThree/pageThree",
      "../pageFour/pageFour",
      "../pageFive/pageFive",
      "../pageSix/pageSix"
    ]
  },
  onShow:function(){

    wx.playBackgroundAudio({
      dataUrl: 'http://api.ool.vc/chargerbaby-admin-server-api/weixin/music.mp3'//(必要)音乐链接，目前支持的格式有 m4a, aac, mp3, wav
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
  onHide:function(){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic:false,
        musicImg:"http://api.ool.vc/chargerbaby-admin-server-api/weixin/suspendMusic.png"
      })
  },
  transformImg:function(){
    const that = this;
    if(that.data.isPlayingMusic){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic:false,
        musicImg:"http://api.ool.vc/chargerbaby-admin-server-api/weixin/suspendMusic.png"
      })
    }else{
      wx.playBackgroundAudio();
      this.setData({
        isPlayingMusic:true,
        musicImg:"http://api.ool.vc/chargerbaby-admin-server-api/weixin/playMusic.png"
      })
    }
  },

  //上下滑动判断
  myToucheMove:function(event){
    const that = this
    const pageY = event.touches[0].pageY;
    const ty = pageY - that.data.lastY;
    that.data.pageYArr.push(event.touches[0].pageY);
  },
  leave:function(){
    const that = this
    const dataPageY = that.data.pageYArr;
    const difference = dataPageY[0] - dataPageY[dataPageY.length - 1];
    if (dataPageY[0] > dataPageY[dataPageY.length - 1] && difference>20){
      if (that.data.oneBoxBl == true && that.data.twoBoxBl == false){
        that.setData({
          oneBoxBl: false,
          twoBoxBl: true,
          threeBoxBl:false
        })
      } else if (that.data.twoBoxBl == true && that.data.threeBoxBl == false){
        that.setData({
          oneBoxBl: false,
          twoBoxBl: false,
          threeBoxBl: true
        })
      } else if (that.data.threeBoxBl == true && that.data.fourBoxBl == false) {
        that.setData({
          oneBoxBl: false,
          twoBoxBl: false,
          threeBoxBl: false,
          fourBoxBl:true
        })
      } else if (that.data.fourBoxBl == true && that.data.fiveBoxBl == false) {
        that.setData({
          fourBoxBl: false,
          fiveBoxBl:true
        })
      } else if (that.data.fiveBoxBl == true && that.data.sixBoxBl == false) {
        that.setData({
          fiveBoxBl: false,
          sixBoxBl:true
        })
      } else if (that.data.sixBoxBl == true && that.data.sevenBoxBl == false) {
        that.setData({
          sixBoxBl: false,
          sevenBoxBl:true
        })
      } else if (that.data.sevenBoxBl == true && that.data.lastBoxBl == false) {
        that.setData({
          sevenBoxBl: false,
          lastBoxBl:true,
          bgUrl: "url('http://qty83k.creatby.com/materials/103419/origin/8a2c3780964af4bb98dca0fbdcad9aac_origin.jpg')"
        })
        
      }
    } else if (dataPageY[0] < dataPageY[dataPageY.length - 1] && difference < -20){
      if (that.data.oneBoxBl == false && that.data.twoBoxBl == true){
        that.setData({
          oneBoxBl: true,
          twoBoxBl: false,
          threeBoxBl:false
        })
      } else if (that.data.twoBoxBl == false && that.data.threeBoxBl == true){
        that.setData({
          oneBoxBl: false,
          twoBoxBl: true,
          threeBoxBl: false
        })
      } else if (that.data.threeBoxBl == false && that.data.fourBoxBl == true) {
        that.setData({
          twoBoxBl: false,
          threeBoxBl: true,
          fourBoxBl:false
        })
      } else if (that.data.fourBoxBl == false && that.data.fiveBoxBl == true) {
        that.setData({
          threeBoxBl: false,
          fourBoxBl: true,
          fiveBoxBl:false
        })
      } else if (that.data.fiveBoxBl == false && that.data.sixBoxBl == true) {
        that.setData({
          fourBoxBl: false,
          fiveBoxBl: true,
          sixBoxBl:false
        })
      } else if (that.data.sixBoxBl == false && that.data.sevenBoxBl == true) {
        that.setData({
          fiveBoxBl: false,
          sixBoxBl: true,
          sevenBoxBl:false
        })
      } else if (that.data.sevenBoxBl == false && that.data.lastBoxBl == true) {
        that.setData({
          sixBoxBl: false,
          sevenBoxBl: true,
          lastBoxBl:false,
          bgUrl: "url('http://qty83k.creatby.com/materials/103419/origin/78df8ceeab433f96813633e3dac98401_origin.jpg')"
        })
      }
    }
    that.setData({
      pageYArr:[]
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
