<template>
    <div class="navBox">
    	<p>
    		<img src="../../../static/images/homepage_man.png" alt="">
    		<span>年轻哪能不放纵，约起来</span>
    	</p>
    	<div class="navList">
    		<router-link v-for="(item,index) in navText" :to="navList[index]"  v-bind:key="index">
    			{{ item }}
    		</router-link>
    	</div>
    </div>
</template>

<script>
	export default {
		name:"homeNav",
		data() {
			return {
				navText:["新用户","我的约跑","我的约行","去发布"],
				navList:["/register","/details_run","/details_travel","/publish"]
			}
		}
	}
</script>

<style>
	.navBox {
		height:130px;
		background-color: #fff;
		background-color: #fff;
	}
	.navBox p {
		width:186px;
		margin:0 auto;
		text-align: center;
		border-bottom: 1px solid;
		height:35px;
		display: flex;
		justify-content:center;
	}
	.navBox p img {
		width:25px;
		height:25px;
		margin-top: 5px;
	}
	.navBox p span {
		font-size: 12px;
		line-height: 35px;
	}
	.navList {
		display: flex;
		height:90px;
	}
	.navList a {
		flex:1;
		text-align: center;
		line-height: 158px;
		font-size: 16px;
		color:#7b7b7b;
	}
	.navList a:nth-child(1) {
		background: url(../../../static/images/newUser.png) no-repeat;
		background-position: center 5px;
	}
	.navList a:nth-child(2) {
		background: url(../../../static/images/myRun.png) no-repeat;
		background-position: center 5px;
	}
	.navList a:nth-child(3) {
		background: url(../../../static/images/myTravel.png) no-repeat;
		background-position: center 5px;
	}
	.navList a:nth-child(4) {
		background: url(../../../static/images/issue.png) no-repeat;
		background-position: center 5px;
	}
</style>