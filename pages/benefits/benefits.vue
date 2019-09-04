<template>
	<view>
		<view class="container">
				<view class="title">
					<p class="title-p">
						{{benefit.benefit_name}}
					</p>
					<img  :src='benefit.label' class="label">
				</view>
				<img class="desc-img" :src='benefit.benefit_big_img' alt="">
				<view class="content">
					<p style= "font-size: 30upx; font-weight: 900;">条件信息：</p>
					<p class="condition">{{benefit.benefit_condition}}</p>			
				</view>
				<view class="content">
					<p style= "font-size: 30upx;font-weight: 900;">有效期：</p>
					<p class="condition">{{benefit.benefit_starttime}}至{{benefit.benefit_endtime}}</p>			
				</view>
				<view class="content">
					<p style= "font-size: 30upx;font-weight: 900;">使用时段：</p>
					<p class="condition">{{benefit.service_range}}</p>			
				</view>
				<view class="content">
					<p style= "font-size: 30upx;font-weight: 900;">使用须知：</p>
					<p class="condition">{{benefit.service_infomation}}</p>			
				</view>
				<view class="content">
					<p style= "font-size: 30upx;font-weight: 900;">服务地址：</p>
					<p class="condition">{{benefit.service_address}}</p>			
				</view>
				<view class="content">
					<p style= "font-size: 30upx;font-weight: 900;">服务电话：</p>
					<p class="condition">{{benefit.service_phone}}</p>			
				</view>
		</view>
		<view class="bottombar">
			<view class="point">{{benefit.benefit_point}}</view>
			<p class="p1">积分</p>
			<view class="buy">购买</view>
		</view>
	</view>
</template>

<script>
	import {get} from '@/api/homepage.js'
	export default {
		components:{
			
		},
		data() {
			return {
				benefit: {},
			}
		},
		onLoad() {
			this.id = this.$root.$mp.query.id
			this.getBenefitByid()
		},
		/*
		*
		* 获取主页传参对应的优惠券详细信息
		*/ 
		methods: {
			async getBenefitByid() {
				let _this = this 
				const res = await get('/api/benefitbyid',{
					benefit_id : _this.id
				})
				_this.benefit = res.data[0]
				console.log(_this.benefit)
			}

		},
	}
</script>

<style lang="scss">
	page {
		background:#fff;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 95% ;
		margin: 10upx auto ;
	}
	
	.title {
		height: 60upx;
		width: 100%;
		margin-top:  20upx;
	}
	
	.title-p {
		display: inline-block;
		width: 200upx;
		height: 60upx;
		margin-left : 20upx;
		font-size:$uni-font-size-base ;
		font-weight:900 ;
		
	}
	
	.label {
		display: inline-block;
		width: 110upx;
		height: 40upx;
		padding-top:10upx;
		padding-bottom: 10upx;
		margin-right: 20upx;
		float: right;
	}
	
	.desc-img {
		width: 100% ;
		height: 300upx;
		margin-top: 20upx;
		border-radius: 10upx;
		border :1px solid #e7ebed;
	}
	
	.content {
		width:100% ;
		margin-top: 20upx;
	}
	
	.condition {
		font-size:$uni-font-size-sm;
		height: 40upx;
		border-bottom: 1px solid #e7ebed;
	}
	
	.bottombar {
	  height: 100upx;
	  position:fixed;
	  width: 100% ;
	  bottom: 0upx;
	  display: flex;

	}
	
	  .point {
	  	width:200upx;
		position: absolute;
		left: 30upx;
		height: 100%;
		color: red;
		text-align: center;
		line-height: 80upx;
		
	  }
	  
	  .p1 {
		  @extend  .point ;
		  left: 110upx;
		  font-size:$uni-font-size-base;
		  color: black ;
	  }
	  
	  
	  
	  .buy {
	    position: absolute;
	    right: 0;
	    height: 100%;
	  	width: 300upx;
	  	background: $bg-color-submain;
		color: #fff;
	  	font-size:$uni-font-size-base;
		text-align: center;
		line-height: 80upx;
	  }

</style>
