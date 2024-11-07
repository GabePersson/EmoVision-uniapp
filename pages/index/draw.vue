<template>
	<view class="content">
		<view class="navigation">
			<uni-icons @click="Back" type="left" size="25"></uni-icons>
		</view>
		<view class="draw-area">
			<wnCanvas style="height: 100px;" saveImageType="3" @saveImage="saveImage" :drawImage="drawImage" :isUnderBkg="true" @dowmloadErr='dowmloadErr' @dowmloadSuc="dowmloadSuc"></wnCanvas>
		</view>
	</view>
</template>
<script>
	import wnCanvas from "../../Draw/components/wn-canvas.vue"
	export default {
		components: {
			wnCanvas
		},
		data() {
			return {
				drawImage:''//绘制背景图片 不传则为白色背景
			}
		},
		methods: {
			Back(){
				uni.navigateBack({
					delta:1,
				});
			},
			saveImage(url) {
				//画板返回的图片地址
				console.log(url);
			},
			dowmloadErr(err){
				//下载图片失败时的回调
				console.log(err);
			},
			dowmloadSuc(res){
				//下载图片成功时的回调
				console.log(res);
			}
		}
	}
</script>
<style>
	.navigation{
		width: 100%;
		min-height: 60px;
		position: fixed;
		z-index: 3;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
		display: flex;
		padding-top:20px;
		padding-left:10px;
		box-sizing: border-box;
	}
	.navigation uni-icons{
		
	}
	.draw-area{
		padding-top: 60px;
		height: 200px;
	}
</style>