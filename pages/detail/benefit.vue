<template>
	<view class="contain">
		<scroll-view  scroll-y class="show" @scroll="asideScroll" :scroll-top="tabScrollTop" scroll-with-animation>
			<view class="benefit-item"  @click="goToDetail(item.benefit_id)" v-for="(item , index) in allbenefits " :key="index">
				<img class="benefit-img" :src = 'item.benefit_small_img'>
					<view class="benefit-title">
						<img  class="mark" :src = 'item.label'>
						<p class="title">{{item.benefit_name}}</p>
					</view>
				<view class="demo">{{item.benefit_point}}积分</view>
			</view>
			
			
		</scroll-view>
	</view>
</template>

<script>
	import {get} from '@/api/homepage.js'
	export default {
		
		data() {
			return {
				 allbenefits : {}
			}
		},
		mounted() {
			this.get_AllBenefits()
		},
		methods: {
			asideScroll(e){
				
			},
			goToDetail(id){
				uni.navigateTo({
					url :'../benefits/benefits?id=' +id
				})
			},
			async get_AllBenefits(){
				let _this = this 
				const res = await get('/api/benefitdetail')
				
				_this.allbenefits = res.data
				console.log( _this.allbenefits)
			}

		}
	}
</script>

<style lang="scss">
	page ,
	.contain {
	}
	
	.show {
		display: flex;
		flex-direction: column;
	}
	
	.benefit-item {
		width : calc(50% - 80upx);
		height: 300upx;
		float: left;
		margin-top:20upx;
		margin-left: 50upx;
		border-radius: 10upx;
	}
	
	.benefit-img {
		width: 100% ;
		height: 200upx;
	}
	
	.benefit-title {
		
	}
	
	.mark {
		width: 110upx;
		height: 40upx;
	}
	
	.title {
		width: 150upx;
		height: 40upx;
		float: right;
		text-align: center;
		font-size: $uni-font-size-sm;
	}
	
	
	.demo {
		@extend  .title ;
		margin-top: -10upx;
		color: $title-color-active;
		
	}
	
</style>
