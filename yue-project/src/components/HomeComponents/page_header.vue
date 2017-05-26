<template>
	<header>
		<span v-text="msg"></span>
		<a href="javascript:void(0);" v-on:click="receiveInfo">
			<img v-bind:src="aimUrl" alt="">
		</a>
	</header>
</template>

<script>

	export default {
		name:"pageHeader",
		props:["msg","aimUrl"],
		methods:{
			receiveInfo() {
				this.$emit("openMenu")
			}
		}
	}
</script>

<style scoped>
	header {
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height:7.49vh;
		background-color: #76d49b;
		color: #fff;
		font-weight: bolder;
		z-index: 100;
	}
	header span {
		float:left;
		line-height: 7.49vh;
		margin-left: 5%;
	}
	header a {
		float:right;
		width:13.33%;
		height:100%;
		display: flex;
		justify-content:center;
		align-items:center;
	}
	header img {
		width:50%;
		height:50%;
	}
</style>
