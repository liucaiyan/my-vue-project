<template>
	<div class="mask"  v-if="getBol" v-on:click="tellBol">
		<div class="header" v-on:click.stop>
			<p>
				<span>请登录</span>
			</p>
			<p>
				<a href="" id="logIn1">我的参加</a>
				<router-link id="logIn2" :to="toLogIn">去登录</router-link>
			</p>
		</div>
		<div class="main" v-on:click.stop>
			<p>
				<img src="../../../static/img/mask3.png" alt="">
				<span>首页</span>
			</p>
			<p class="mine_yue">
				<span>我的约行</span>
				<a href="">+</a>
			</p>
			<p class="mine_yue">
				<span>我的约跑</span>
				<a href="">+</a>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"mask",
		props:["getBol"],
		data() {
			return {
				toLogIn:"/login"
			}
		},
		methods:{
			tellBol:function() {
				this.$emit("telFather")
			}
		}
	}
</script>

<style scoped>
	.mask {
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		left:0;
		top:0;
		width:100vw;
		height:100vh;
		z-index: 10000;
		text-align: left;
	}
	.header {
		width:80vw;
		height:15vh;
		color: #fff;
		background-color:#76d49b;
	}
	.header p:nth-child(1) {
		height:7.50vh;		
	}
	.header p:nth-child(2) {
		height:7.50vh;
		display: flex;
		align-items:center;
	}
	#logIn1 {
		width:18.67vw;
		font-size: 14px;
		color: #fff;
		margin-left:  5.33vw;
		background: url("../../../static/img/mask1.png") no-repeat;
		background-position: 0 center;
		padding-left:6.4vw;
	} 
	#logIn2 {
		width:18.67vw;
		font-size: 14px;
		color: #fff;
		margin-left: 20.33vw;
		background: url("../../../static/img/mask2.png") no-repeat;
		background-position: 0 center;
		padding-left:6.4vw;
	} 
	.header p:nth-child(1) span {

		float: left;
		margin-left:5.33vw;
		margin-top:1.50vh;
		font-weight: bolder;
		font-size: 22px;
	}
	.main {
		width:80vw;
		height:200vh;
		background-color:#fff;
	}
	.main p:nth-child(1) {
		display: flex;
		align-items:center;
		font-size: 18px;
		height:6.0vh;
	}
	.main p:nth-child(1) img {
		width:5.87vw;
		height:3.30vh;
		margin:0 5.33vw 0 5.33vw;
	}
	.main p:nth-child(1) span {
		color: #76d49b;
	}
	.mine_yue {
		height:7.50vh;
		display: flex;
		align-items:center;
	}
	.mine_yue span {
		margin-left: 5.33vw;
		font-size: 16px;
		color: #b9c1c2;
	}
	.mine_yue a {
		margin-left:40vw;
	}
</style>