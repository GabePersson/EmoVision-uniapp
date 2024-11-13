<template>
	<view class="tab-bar">
		<view class="tab-item" :class="{ selected: selectedTab === '/pages/index/home' }"
			@click="redirectTo('/pages/index/home')">
			Home
		</view>
		<view class="tab-item" @click="redirectTo('/pages/index/model_select')">
			1
		</view>
		<view class="tab-item" :class="{ selected: selectedTab === '/pages/index/about' }"
			@click="redirectTo('/pages/index/about')">
			About
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			selectedTab: {
				type: String,
				default: '/pages/index/home'
			}
		},
		methods: {
			redirectTo(url) {
				uni.redirectTo({
					url: url
				});
			}
		}
	};
</script>

<style scoped>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: white;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #f5f5f5;
	}

	.tab-item {
		flex: 1;
		text-align: center;
		padding: 10px 0;
		color: #ccc;
	}

	.tab-item.selected {
		color: #2979ff;
		/* 选中的文字颜色 */
		font-weight: bold;
		background-color: #f0f0f0;
		/* 选中的背景颜色 */
	}
</style>