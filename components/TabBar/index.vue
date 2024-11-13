<template>
	<view style="height: 180rpx;">
		<view class="content" :style="{zIndex}">
			<view class="tabber_box">
				<view v-for="(item,index) in tabBars" :key="index"
					:style="{width:`${ratio}%`,display:'flex',justifyContent:'space-around',margin: '24rpx 0'}">
					<view class="tabber_item" @click="onNav(item.pagePath)">
						<image v-if="currentPath === item.pagePath" :src="item.iconPath"></image>
						<image v-else :src="item.selectedIconPath"></image>
						<text
							:style="{color:currentPath === item.pagePath ? item.selectedColor : item.color}">{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentPath: { // 当前页面路径
				type: String,
				default: '/pages/index/home',
			},
			zIndex: { // 界面层级
				type: Number,
				default: 10
			}

		},
		data() {
			const color = '#FFFFFF66';
			const selectedColor = '#FFF';
			return {
				tabBars: [{
						name: '首页',
						iconPath: '../../static/TabBar/home_activate.png',
						selectedIconPath: '../../static/TabBar/home_unactivate.png',
						pagePath: '/pages/index/home',
						color,
						selectedColor,
					},
					{
						name: '邀请',
						iconPath: '../../static/logo.png',
						// selectedIconPath: '../../static/tabbar/selectd_lnvite.png',
						pagePath: '/pages/index/model_select',
						color,
						selectedColor,
					},
					{
						name: '关于',
						iconPath: '../../static/TabBar/me_activate.png',
						selectedIconPath: '../../static/TabBar/me_unactivate.png',
						pagePath: '/pages/index/about',
						color,
						selectedColor,
					}

				],
				ratio: 0,
				isLogin: false,
			}
		},
		mounted() {
			this.ratio = 100 / this.tabBars.length;
		},
		methods: {
			onNav(url) {
				console.log(url);
				if (url == '/pages/index/model_select') {
					console.log('enter');
					uni.reLaunch({
						url: url
					})
				} else if (this.currentPath !== url) uni.switchTab({
					url
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>