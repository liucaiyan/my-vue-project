<template>
	<div class="fatherBox">
		<publish-header v-bind:childHeadText="thisPageHead"></publish-header>		
		<div class="activityInfo acti1"><input type="text" placeholder="活动主题"></div>
		<div class="activityInfo acti2"><input type="date" placeholder="活动开始时间"></div>
		<div class="activityInfo acti3"><input type="date" placeholder="活动结束时间"></div>
		<div class="activityInfo acti4"><input type="text" placeholder="活动报名截止时间"></div>
		<div class="activityInfo acti5"><input type="text" placeholder="活动地点"></div>
		<div class="activityInfo acti6"><input type="text" placeholder="详细地址"></div>
		<div class="activityInfo acti7"><input type="text" placeholder="人数"></div>
		<textarea name="" id="introduce" cols="30" rows="7" placeholder="添加活动介绍，让小伙伴更好的了解活动~"></textarea>
		<div class="clearfix">
			<button class="poster">上传海报</button>
		</div>
		<div class="clearfix">
			<button class="confirmPublish">确定发布</button>
		</div>
	</div>
</template>

<script>
	import publish from '../HomeComponents/childPage_header'
	export default {
		name:"publish",
		data() {
			return {
				thisPageHead:"我的发布",
				issueList:[{text:"活动主题"},
				{text:"活动开始时间"},
				{text:"活动结束时间"},
				{text:"报名截止时间"},
				{text:"地点"},
				{text:"详细地址"},
				{text:"人数"},
				],
				introduce:"添加活动介绍，让小伙伴更好的了解活动~"
			}
		},
		components:{
			"publish-header":publish
		}
	}
</script>

<style scoped>
	.fatherBox {
		background-color: #fff;
	}
	.activityInfo {
		border-bottom: 1px solid #d8d8d8;
	}
	input {
		display: block;
		width:90vw;
		margin-left: 10vw;
		ontline:none;
		border:none;
		height:6.9vh;
	}
	.acti1 {
		background:url("../../../static/img/issue_1.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti2 {
		background:url("../../../static/img/issue_2.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti3 {
		background:url("../../../static/img/issue_2.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti4 {
		background:url("../../../static/img/issue_2.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti5 {
		background:url("../../../static/img/issue_3.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti6 {
		background:url("../../../static/img/issue_4.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	.acti7 {
		background:url("../../../static/img/issue_5.png") no-repeat;
		background-position: 2.2vw 1.6vh;
		background-color: #fff;
	}
	textarea {
		background:url("../../../static/img/issue_6.png") no-repeat;
		background-position: 2.2vw -0.4vh;
		background-color: #fff;
		width:90vw;
		padding-left: 10vw;
		resize:none;
		font-size: 18px;
	}
	textarea:focus {
		outline: none;
		border:1px solid #76d49b;
	}
	.poster {
		width:100vw;
		float: left;
		height:7.5vh;
		line-height: 7.5vh;
		text-align: center;
		background-color: #dddddd;
		color: #000;
		margin:1.2vh 0;
	}
	.confirmPublish {
		width:100vw;
		float: left;
		height:7.5vh;
		line-height: 7.5vh;
		text-align: center;
		background-color: #76d49b;
		color: #fff;
	}
</style>