<template>
	<div class="activity">
		<span>热门活动</span>
		<router-link :to="activityRoot">
			<img src="../../../static/images/dots.png" alt="">
		</router-link>
	</div>
</template>

<script>
	export default {
		name:"hotActivity",
		data() {
			return {
				activityRoot:"/travel"
			}
		}
	}
</script>

<style scoped>
	.activity {
		height:40px;
		background: url(../../../static/images/flag.png) no-repeat;
		background-position: 6px 7px;
		background-color: #fff;
		margin:6px 0 2px;
	}
	.activity span {
		float:left;
		font-size: 12px;
		margin:10px 0 0 35px;
	}
	.activity a {
		float:right;
		margin:13px 5px 0 0;
	}
	.activity a img {
		width:35px;
		height:20px;
	}
</style>