//logs.js
const util = require('../../utils/util.js')

Page({
  data:{
    containerHomeBl:true,
    bottomLeftImg:"http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/hotUnImg.png",
    bottomRightImg:"http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/moreUnImg.png",
    hotText:"#686868",
    moreText:"#686868"
  },
  clickHot:function(){
    this.setData({
      bottomLeftImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/hotSelectedImg.png",
      bottomRightImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/moreUnImg.png",
      hotText: "#ff4e6e",
      moreText: "#686868"
    })
    wx.navigateTo({
      url:"../pageTwo/pageTwo"
    })
  },
  clickMore:function(){
    this.setData({
      bottomLeftImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/hotUnImg.png",
      bottomRightImg: "http://api.ool.vc/chargerbaby-admin-server-api/weixin/logsImg/moreSelectedImg.png",
      hotText: "#686868",
      moreText: "#ff4e6e"
    })
    wx.navigateTo({
      url:"../pageThree/pageThree"
    })
  },
  oneRoute:function(event){
    const that = this;
    const count = that.data.oneLeft;
    
    // count += 1;
    wx.navigateTo({
      url: "../index/index",
      success:function(res){
        // console.log(res);
      }
    });
  },
  twoRoute:function(event){
    wx.navigateTo({
      url:"../pageTwo/pageTwo",
      success:function(res){

      }
    })
  },
  threeRoute:function(event){
    wx.navigateTo({
      url:"../pageThree/pageThree",
      success:function(res){

      }
    })
  },
  fourRoute: function (event) {
    wx.navigateTo({
      url: "../pageFour/pageFour",
      success: function (res) {

      }
    })
  },
  fiveRoute: function (event) {
    wx.navigateTo({
      url: "../pageFive/pageFive",
      success: function (res) {

      }
    })
  },
  sixRoute: function (event) {
    wx.navigateTo({
      url: "../pageSix/pageSix",
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
      title: '音乐美文秀',
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
