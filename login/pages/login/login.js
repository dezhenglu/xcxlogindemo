var app = getApp();
Page({
  data:{
    username:null,
    password:null
  },
  loginBtnClick:function(){
    app.appData.userinfo = {username:this.data.username,password:this.data.password};
    // wx.redirectTo({
    //   url: '../user/user',
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     console.log('redirectTo f')
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
    wx.switchTab({
      url: '../user/user',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  usernameInput:function(event){
    //console.log(event);
    this.setData({username:event.detail.value});
  },
  passwordInput:function(event){
    this.setData({password:event.detail.value});
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})