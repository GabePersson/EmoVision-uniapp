<template>
	<view class="container">
		<view class="area2">
			<view style="position: fixed; z-index: 1;
			height: 50px;
			width: 100%;
			background-color: white;
			border-radius: 10px;
			padding: 20px;
			box-sizing: border-box;">
				<text style="font-size: 18px;
			font-weight: bold;">统计</text>
			</view>
			<view style="margin-top: 70px;">
				<uni-card title="绘画时间">
					<text>{{ drawTime }}</text>
				</uni-card>
				<uni-card title="上次疗愈情绪">
					<text>{{ recover }}</text>
				</uni-card>
				<text style="font-size: 18px;
				font-weight: bold;
				margin: 20px;
				box-sizing: border-box;">历史记录</text>
				<view v-for="(item,index) in pictureList" :key="index">
					<view class="picture-area" hover-class="picture-area-hover">
						<image :src="item.path" mode="aspectFit"></image>
						<view class="picture-info">
							<view class="picture-name">{{ item.name }}</view>
							<view class="picture-description">{{ item.description }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drawTime: '23小时59分59秒',
				recover: 'annoy',
				pictureList: [{
						name: '1111',
						path: '../../static/c1.png',
						description: '111'
					},
					{
						name: '1',
						path: '../../static/c2.png',
						description: '111222'
					}
				]
			}
		},
		methods: {}
	}
</script>

<style scoped>
	.container {
		font-size: 14px;
		line-height: 24px;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 50px);
	}

	/* 	.area1 {
		box-sizing: border-box;
		height: 240px;
		padding-top: 80px;
	} */

	.area2 {
		background-color: white;
		box-sizing: border-box;
		flex: 1;
		overflow: auto;
		border-radius: 10px 10px 0 0;
	}

	.start-draw {
		margin: 20px;
		background-color: #2979ff;
		text-align: center;
		padding: 10px;
		border-radius: 5px;
		color: white;
	}

	.start-draw-hover {
		background-color: #94bcff;
	}

	.picture-area {
		display: flex;
		margin: 10px;
		border-radius: 10px;
		padding: 10px;
	}

	.picture-area image {
		width: 80px;
		height: 80px;
		border: 1px solid #ccc;
		border-radius: 10px;
	}

	.picture-info {
		margin: 10px;
	}

	.picture-name {
		max-width: 190px;
		overflow-wrap: break-word;
		word-wrap: break-word;
		font-size: 18px;
		font-weight: bold;
	}

	.picture-description {
		font-size: 12px;
		color: #8f939c;
	}

	.picture-area-hover {
		background-color: #f8f8f8;
	}
</style>