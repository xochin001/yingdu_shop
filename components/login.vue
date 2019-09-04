<template>
	<view>
		<view class="header">
			<img :src="login" alt="">
		</view>
		<view class="content">
			<view>申请获取以下权限</view>
			<text>获得你的公开信息（昵称，头像等）</text>
		</view>
		<button class='button'  open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin" >授权登录</button>
	</view>
</template>

<script>
	import {login,host} from "../api/homepage.js"
	var qcloud = require("wafer2-client-sdk/index.js")
	export default {
		created() {
			qcloud.setLoginUrl(host + "/api/login")
		},
		data() {
			return {
				login : '/static/wx_login.png',
			}
		},
		methods: {
			doLogin() {
			  wx.showLoading({
			    title: "登录中...", //提示的内容,
			    mask: true, //显示透明蒙层，防止触摸穿透,
			    success: res => {}
			  });
			  const session = qcloud.Session.get();
			  if (session) {
			    // 第二次登录
			    // 或者本地已经有登录态
			    // 可使用本函数更新登录态
			    qcloud.loginWithCode({
			      success: res => {
			        // this.setData({ userInfo: res, logged: true });
			        wx.setStorageSync("key", "value")
			      },
			      fail: err => {
			        console.error(err)
			      }
			    });
			  } else {
			    // 首次登录
			    qcloud.login({
			      success: res => {
			        console.log(res)
			        wx.hideLoading()
			        wx.setStorageSync("userInfo", res)
			        var openId = res.openId
			        wx.setStorageSync("openId", openId)
					uni.navigateTo({
						url : '/pages/index/index'
					})	
			      },
			      fail: err => {
			        console.log("出错了"+err)
					uni.setStorageSync("refuselogin" , true)
			        wx.hideLoading()
			        uni.navigateTo({
			        	url : '/pages/index/index'
			        })
			      }
			    })
			  }
			}
		}
		
	}
</script>

<style lang="scss">
	page {

	} 
	
	.header {
		margin : 90upx 0 90upx 50upx ;
		width :650upx ;
		height: 300upx;
		border-bottom: 1px solid ;
		text-align:  center;
		
	}
	
	img {
		width : 150upx;
		height: 150upx;
	}
	
	.content {
		margin-left : 50upx ;
		margin-bottom: 90upx ;
		font-size: $uni-font-size-lg;
	}
	
	.content text {
		display: block;
		color: #9d9d9d;
		margin-top: 40upx;

	}
	
	.button {
		border-radius: 80upx;
		margin: 70upx 50upx;
		font-size: 35upx;
		background: $bg-color-submain;
		color: white;
		
	}

</style>
