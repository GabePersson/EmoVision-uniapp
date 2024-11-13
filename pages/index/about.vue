<template>
	<TabBar currentPath='/pages/index/about'></TabBar>
</template>

<script>
	export default {
		onLoad() {
			uni.hideTabBar()
		}
	}
	// import CustomTabBar from '@/components/CustomTabBar.vue'
	// export default {
	// 	components: {
	// 		CustomTabBar
	// 	}
	// }
</script>

<style>
</style>