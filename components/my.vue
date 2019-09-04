<template>
	<view class="users" @click="goTouserDetail()">
		<img :src='avator' alt="" class="users-img">
	</view>
</template>

<script>
	import {login } from '../api/homepage.js'
	export default {
		created () {
			if(login()){
				this.userInfo = login()
				this.avator = this.userInfo.avatarUrl
			}
			console.log(this.avator)
		},

		data() {
			return {
				avator: '/static/user1.png',
			}
		},
		methods:{
			goTouserDetail(){
				uni.navigateTo({
					url :'/pages/user/user'
				})
			}
		}
	}
</script>

<style lang="scss">
	.users {
		height : 60upx ;
		width : 150upx ;
		position: fixed;
		bottom : 300upx ;
		border-radius: 30upx 0 0 30upx;
		right: 1upx;
		z-index: 99;
		background: #EDE1D9;
		box-shadow: 10upx 10upx 5upx #888888;
	}
	
	.users-img {
		height:60upx ;
		width:60upx;
		margin-left:5upx;
		border-radius: 30upx ;
		//border : 1px solid;
		
	}
</style>
