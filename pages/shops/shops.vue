<template>
	<view class="container">
		<view >
			<img :src='shopsdetail.big_img' alt="" class="shop-img">
		</view>
		<view class="shop-title">
			<img :src="shopsdetail.label" class="label">
			<view class="from">
				<text class="shopfrom">{{shopsdetail.shop_from}}</text>
				<text class="floor">{{shopsdetail.floor}}</text>
					<view class="subtitle">
						<text class="title-p">电话：</text >
						<text class="phone">{{shopsdetail.phone}}</text >
						<text class="title-p">营业时间: </text>
						<text class="times">{{shopsdetail.vail_time}}</text >
					</view>
			</view>


	</view>
	<view class="shop-content">
			<p class="content-title">店铺介绍：</p>
		<p class="content">
			{{shopsdetail.shop_desc}}
		</p>
	</view>
		<my></my>
	</view>
</template>

<script>
	import my from '../../components/my.vue'
	import {get} from '@/api/homepage.js'
	export default {
		components:{
			my
		},
		data() {
			return {
				shopsdetail : {} ,
			}
		},
		onLoad() {
				this.id = this.$root.$mp.query.id
				this.get_shopsdetail()
		},
		/*
		*
		* 获取主页传参对应的店铺详细信息
		*/ 
		methods: {
				async get_shopsdetail (){
					let _this = this 
					const res = await get('/api/shopbyid',{
						shop_id :_this.id
					})
					_this.shopsdetail = res.data[0] 
					console.log(_this.shopsdetail)
				}
			},
	}
</script>

<style lang="scss">
	page ,
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.shop-img {
		width:100%;
		height: 350upx;
	}
	
	.shop-title {
		height: 120upx;
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	
	.label {
		width: 150upx;
		height: 40upx;
		padding-top:10upx;
		padding-bottom: 10upx;
	}
	
	.from {
		width: 100%;
		height: 100%;
		flex-direction: row;
		padding-left: 20upx;
		padding-right: 20upx;

	}
	
	.shopfrom {
		width :100%;
		height: 40%;
		font-size: $uni-font-size-lg;
		font-weight: 1000;
	}
	
	.floor {
		position: absolute;
		width: 150upx;
		height: 50upx;
		font-size: $uni-font-size-sm;
		color: $title-color-active;
		line-height: 50upx;
		text-align: center;
		right : 10upx;
		
	}
	
	.subtitle {
		@extend  .shopfrom ;
		height: 60%;
		margin-top: 10upx;
	}
	
	.title-p {
		font-size: 28upx;
	}
	
	.phone {
		font-size: $uni-font-size-sm;
		color: $title-color-active;
		margin-right: 15upx;
		width: 200upx;
	}
	
	.times {
		@extend .phone ;
	}
	
	.shop-content {
		@extend  .shop-title ;
		flex-direction: column;
	}
	
	.content-title {
		font-size: $uni-font-size-lg;
		margin-bottom: 20upx;
	}
	
	.content {
		font-size: $uni-font-size-base;
		color: $title-color-active;
		padding-left: 20upx;
	}


</style>
