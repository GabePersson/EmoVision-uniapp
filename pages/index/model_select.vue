<template>
	<div class="container">
		<div class="title">请选择模版</div>
		<div class="buttons">
			<div class="btn" v-for="template in templates" :key="template.name" @click="selectTemplate(template.name)">
				<img :src="template.img" :alt="template.name">
			</div>
		</div>
		<div class="footer">
			<div class="selected">{{ selectedText }}</div>
			<div class="confirm" @click="confirmSelection">确认</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				templates: [{
						name: '空模版',
						img: 'static/c1.png'
					}, {
						name: '山水图',
						img: 'static/c2.png'
					},
					{
						name: '花草图',
						img: 'static/c3.png'
					},
					{
						name: '田园图',
						img: 'static/c4.png'
					}
				],
				selectedTemplate: ''
			};
		},
		computed: {
			selectedText() {
				return this.selectedTemplate ? `已选择${this.selectedTemplate}模版` : '未选择';
			}
		},
		methods: {
			selectTemplate(templateName) {
				this.selectedTemplate = this.selectedTemplate === templateName ? '' : templateName;
			},
			confirmSelection() {
				uni.redirectTo({
					url: '/pages/index/new_draw?stage=1'
				})
			}
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #F0F0F0;
	}

	.title {
		font-size: 20px;
		padding: 20px;
		color: #333;
		text-align: center;
		font-weight: bold;
		background-color: #ffffff;
		border-bottom: 1px solid #ddd;
	}

	.skip {
		position: absolute;
		top: 20px;
		right: 20px;
		color: #1AAD19;
		cursor: pointer;
		font-size: 16px;
	}

	.buttons {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-grow: 1;
		padding: 20px;
	}

	.buttons .btn {
		width: 30%;
		height: 200px;
		background-color: #F7F7F7;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
		transition: transform 0.2s;
	}

	.buttons .btn:hover {
		transform: scale(1.05);
	}

	.buttons .btn img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-color: #ffffff;
		border-top: 1px solid #ddd;
	}

	.footer .selected {
		flex-grow: 1;
		text-align: center;
		color: #666;
		font-size: 16px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
		margin-right: 10px;
	}

	.footer .confirm {
		width: 100px;
		height: 50px;
		background-color: #1AAD19;
		color: white;
		text-align: center;
		line-height: 50px;
		border-radius: 5px;
		font-size: 18px;
		cursor: pointer;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}
</style>