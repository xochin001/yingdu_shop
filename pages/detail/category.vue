<template>
	<view class="container">
		<scroll-view scroll-y class="left-aside">
			<view v-for="item in shops" :key="item.id" class="nav-left-item" :class=" currentId === item.id?'active':'' " @click="tabtap(item)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view  scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop" scroll-with-animation>
			<view class="right-item" v-for="(item ,index1) in detaildata" :key = "index1" @click="goToShopDetail(item.shop_id)">
				<img class="shop-img" :src='item.small_img' alt=""></img>
					<view class="shop-title">
						<img :src='item.label' alt="" class="mark">
						<p class="title">{{item.shop_name}}</p>
					</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {get} from '@/api/homepage.js' 
	export default {
		data() {
			return {
				shops:[{
					name : '服装',
					id:'1'
				},{
					name : '餐饮',
					id:'2'
				},{
					name : '娱乐',
					id:'3'
				},{
					name : '零食',
					id:'4'
				}],
				currentId: '1' ,
				datas: [],
				detaildata: { },
			}
		},
		mounted() {
			this.getshopdata()
		},
		methods: {
			asideScroll(e){
				
			},
			async	tabtap(item ) {
				this.currentId = item.id 
				const res = await get('/api/shopsdata',{
					category_id : item.id
				})
				this.detaildata = res.data 
				console.log(this.detaildata)
				
				
			},
			
			async getshopdata () {
				let _this = this 
				const res = await get('/api/shopsdata',{
					category_id : 1
				})
				_this.detaildata = res.data 
				
			},
			
			goToShopDetail (id) {
				console.log(id)
				uni.navigateTo({
					url : '../shops/shops?id='+id
				})
			}
			

		}
	}
</script>

<style lang="scss">
	.container {
		flex-direction: row;
		background: $bg-color-main;
	}
	
	.left-aside {
		flex-shrink: 0;
		width: 20%;
		height: 100vh;
		
	}
	
	.nav-left-item {
		height: 100upx;
		border-right: solid 1px #E0E0E0;
		font-size: $uni-font-size-base;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.active {
		color: $title-color-active;
		background-color : #ffffff;
	}

	
	.right-aside {
		width: 80% ;
		display: flex;
		flex-wrap: wrap;
		background:  $bg-color-main;
	}
	
	.right-item {
		width: calc(50% - 20upx);
		margin-left: 10upx;
		margin-top : 10upx;
		height: 250upx;
		float: left;
		background: #fff;
		border-radius: 10upx;
		box-shadow: 2upx 2upx 2upx #E0E0E0;
	}
	
	.shop-img {
		width:100%;
		height: 190upx;
	}
	
	.shop-title {

	}
	
	.mark {
		width: 110upx;
		height: 40upx;
		padding-top:10upx;
		padding-bottom: 10upx;
	}
	
	.title {
		width: 120upx;
		height: 50upx;
		float: right;
		text-align: center;
		line-height: 50upx;
		font-size: $uni-font-size-sm;
	}
	
	
</style>
