<template>
	<view class="container">
		<view class="area1">
			<view class="search-area">
				<view class="search-wrapper">
					<uni-icons type='arrow-left' @click='Back' class="back-icon"></uni-icons>
					<uni-search-bar v-model="searchValue" @input="SearchInput()" @cancel="SearchCancel"
						@clear="searchValue = ''" class="search-bar">
					</uni-search-bar>
				</view>
			</view>
		</view>
		<view class="area2">
			<view style="position: fixed; z-index: 1;
			height: 50px;
			width: 100%;
			background-color: white;
			border-radius: 10px;
			padding: 20px;
			box-sizing: border-box;">
				<text style="font-size: 18px;
				font-weight: bold;
				margin: 20px;
				box-sizing: border-box;">图片</text>
				<view v-for="(item,index) in searchDataList" :key="index">
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
				searchValue: '',
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
				],
				searchDataList: [{
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
		methods: {
			SearchData(key) {
				this.searchDataList = [];
				for (var i = 0; i < this.pictureList.length; i++) {
					var item = this.pictureList[i];
					var name = item.name;
					var desc = item.description;
					if (name.includes(key) || desc.includes(key)) {
						this.searchDataList.push(item)
					}
				}
			},
			SearchInput() {
				this.SearchData(this.searchValue);
			},
			SearchCancel() {},
			Back() {
				uni.navigateBack({
					'delta': 1
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 0;
		margin: 0;
		font-size: 14px;
		line-height: 24px;
		display: flex;
		flex-direction: column;
		height: 100vh;
		/* 确保容器高度占满屏幕 */
	}

	.area2 {
		padding: 0;
		margin: 0;
		background-color: white;
		flex: 1;
		overflow: auto;
		border-radius: 10px 10px 0 0;
	}


	/* 	.area1 {
		box-sizing: border-box;
		min-height: 200px;
	} */

	/* 	.area2 {
		background-color: white;
		box-sizing: border-box;
		flex: 1;
		overflow: auto;
		border-radius: 10px 10px 0px 0px;
	} */

	.search-area {
		padding-top: 10px;
		background-color: white;
		border-radius: 0 0 10px 10px;
	}

	.search-wrapper {
		display: flex;
		align-items: center;
	}

	.back-icon {
		margin-left: 10px;
		/* 调整数值以增加左边距 */
		margin-right: 10px;
		font-size: 22px;
	}

	.search-bar {
		flex: 1;
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