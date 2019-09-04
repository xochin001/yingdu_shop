<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			uni.removeStorageSync('refuselogin')
		},
		onHide: function() {
			console.log('App Hide')
			
		}
	}
</script>

<style>
	@import url("./iconfont/iconfont.css")
	/*每个页面公共css */
</style>
