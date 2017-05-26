<template>
	<footer>
		<router-link :to="rootList[index]" v-for="(item,index) in footList"  v-bind:key="index" v-bind:class="{active:$route.path === rootList[index]}">
			{{item}}
		</router-link>
	</footer>
</template>

<script>
	export default {
		name:"homeFooter",
		data() {
			return {
				footList:["首页","约跑","约行","我的"],
				rootList:["/","/running","/travel","/user"]
			}
		}
	}
</script>

<style scoped>
	footer {
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		height:55px;
		display: flex;
		box-shadow: 0 0 3px gray;
		background-color: #fff;

	}
	footer a {
		flex:1;
		line-height: 80px;
		color:#4d555d;
		text-align: center;				
	}
	footer a:nth-child(1) {
		background: url(../../../static/images/tab_home.png) no-repeat;
		background-size: 22px 25px;
		background-position: center 5px;
	}
	footer a:nth-child(2) {
		background: url(../../../static/images/tab_running.png) no-repeat;
		background-size: 22px 25px;
		background-position: center 5px;
	}
	footer a:nth-child(3) {
		background: url(../../../static/images/tab_travel.png) no-repeat;
		background-size: 22px 25px;
		background-position: center 5px;
	}
	footer a:nth-child(4) {
		background: url(../../../static/images/tab_user.png) no-repeat;
		background-size: 22px 25px;
		background-position: center 5px;
	}
	.active {
		color:#76d49b;
	}
</style>