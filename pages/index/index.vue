<template>
<view>
	<tologin v-if='lslogin&&notemp'></tologin>
	<view v-else  class="container">
		<scroll-view id="tab-bar" class="scroll-h" scroll-x="true" show-scrollbar="false" :scroll-into-view="scrollInto">
		    <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
		        <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
		    </view>
			<uni-search   class="search" :iconSrc="iconSrc" :inputAttr="inputAttr">
			</uni-search>
		</scroll-view>
		<view class="content">
			<benefit v-if='tabIndex===0'></benefit>
			<category v-if='tabIndex===1'></category>
			<floor v-if='tabIndex===2'></floor>
		</view>
		<my></my>
	</view>
</view>
</template>

<script>
	import tologin from '../../components/login.vue'
	import benefit from '../detail/benefit.vue'
	import category from '../detail/category.vue'
	import my from '../../components/my.vue'
	import floor from '../detail/floor.vue'
	import uniSearch from '../../components/lee-search/lee-search.vue'
	import {login,host} from "../../api/homepage.js"
	var qcloud = require("wafer2-client-sdk/index.js")
	export default {
		mounted() {
			if(login()){
				this.lslogin = false
			}
			if(uni.getStorageSync('refuselogin'))
			{
				this.notemp = false 
			}
			
			
		},
		components:{
			uniSearch,
			benefit,
			category,
			floor,
			my,
			tologin
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
				    name: '商户优惠',
				    id: 'youhui'
				}, {
				    name: '商家分类',
				    id: 'fenlei'
				}, {
				    name: '楼层商家',
				    id: 'shangjia'
				}],
				notemp : true,
				lslogin : true ,
				tabIndex: 0 ,
				avator : '../../static/user.png',
				scrollInto: "",
				iconSrc : {
					logo: '../../static/lee-search/icon_search.png'
				},
				inputAttr : {
					backgroundColor: '#ffffff',
					placeholderText: ' '
				}
			}
		},

		onLoad() {

		},
		methods: {
			
			ontabtap(e) {
			    let index = e.target.dataset.current || e.currentTarget.dataset.current
			     this.tabIndex = index
			     this.scrollInto = this.tabBars[index].id
			},
			
			
			
		}
	}
</script>

<style lang="scss">
	page {
		
	}
	
	.container {
		display: flex;
		flex-direction: column;
		background: #fff;
	}
	
	.scroll-h {
	    width: 750upx;
	    height: 80upx;
	    border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}
	
	.uni-tab-item {
	    display: inline-block;
	    padding-left: 30upx;
	    padding-right: 30upx;
		
	}
	
	.uni-tab-item-title {
	    color: $title-color-base;
	    font-size: 30upx;
	    height: 80upx;
	    line-height: 80upx;
	    flex-wrap: nowrap;
	}
	
	.uni-tab-item-title-active {
	    color: $title-color-active;
		padding-bottom: 17upx;
		border-bottom: 5upx solid $title-color-active;
	}
	
	.search {
		position:absolute;
		right: 10upx;
		top: 10upx;
		z-index: 9999;
		width: 140upx;
	}
	
	.content {
		background: #fff;
	}
	


</style>
