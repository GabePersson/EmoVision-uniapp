<template>
	<view class="box">
		<th-autograph :is-download="false" @submit="next" canvas-id="autograph">
		</th-autograph>
	</view>
</template>

<script>
	import thAutograph from "../../uni_modules/th-autograph/components/th-autograph/th-autograph.vue"
	export default {
		components: {
			thAutograph
		},
		data() {
			return {
				stages: '1'
			}
		},
		methods: {
			next() {
				if (this.stages == '1') {
					uni.showModal({
						title: '提示',
						content: '确定要进入下一阶段吗？',
						success: function(res) {
							if (res.confirm) {
								uni.redirectTo({
									url: '/pages/index/watch_data'
								})
							} else if (res.cancel) {}
						}
					});
				} else {
					uni.showModal({
						title: '提示',
						content: '确定要结束绘画吗？',
						success: function(res) {
							if (res.confirm) {
								uni.redirectTo({
									url: '/pages/index/home'
								})
							} else if (res.cancel) {}
						}
					});

				}
			}
		},
		onLoad(options) {
			this.stages = options.stage;
		}
	}
</script>

<style>
	body,
	html {
		margin: 0;
		padding: 0;
		height: 100%;
		font-family: "Helvetica Neue", Arial, sans-serif;
		overflow: hidden;
		/* 防止页面有滚动条 */
	}

	page {
		width: 100%;
		height: 100%;
	}

	.box {
		width: 100%;
		height: 100%;
	}
</style>