<template>
	<div>
		<div class="loading" v-if="bol">
			<img src="../../../static/img/loading.gif" alt="">
		</div>
		<div class="coverImg">
			<img :src="infoList.travelPic" alt="">
			<span>{{infoList.people}}</span>
		</div>
		<p class="site">{{infoList.site}}</p>
		<p class="organizer">
			<span>{{infoList.organizer}}</span>
			<span>{{infoList.issueTime}}</span>
		</p>
		<ul>
			<li class="activityTime">
				<span>活动时间:</span>
				<span>{{infoList.beginTime}}--{{infoList.endTime}}</span>
			</li>
			<li class="deadline">
				<span>报名截止:</span>
				<span>{{infoList.deadline}}</span>
			</li>
			<li class="activitySite">
				<span>活动地址:</span>
				<span>{{infoList.destination}}</span>
			</li>
			<li class="charge">
				<span>是否收费:</span>
				<span>{{infoList.charge}}</span>
			</li>
			<li class="announcer">
				<span>发布人:</span>
				<span>{{infoList.organizer}}</span>
			</li>
		</ul>
		<a href="javascript:void(0);" class="toRegister" @click="toRegister">去报名</a>

		<div class="ifRegister" v-if="ifRegisterBol">
			<div class="subRegister">
				<p>
					<span>确认报名？</span>
				</p>
				<p>
					<span @click="cancel">取消</span>
					<span @click="makeSure">确定</span>
				</p>
			</div>
		</div>

		<div class="success" v-if="successBol">
			<div class="subSuccess">成功！</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"detailModel",
		props:["getRoot"],
		data() {
			return {				
				bol:true,
				infoList:{},
				ifRegisterBol:false,
				successBol:false
			}
		},
		methods:{
			getData: function() {
				this.$http.get(this.getRoot)
						  .then(function(response) {
						  	this.infoList = JSON.parse(response.bodyText).data;
							this.bol = false;
						  })
					
			},
			toRegister() {
				this.ifRegisterBol = true;
			},
			cancel() {
				this.ifRegisterBol = false;
			},
			cancelSuccess() {
				this.successBol = false;
			},
			makeSure() {
				this.ifRegisterBol = false;
				this.successBol = true;
				setTimeout(this.cancelSuccess,1000)
			}
		},
		created: function() {
			// 发起ajax 请求数据
			this.getData();
		}
	}
</script>

<style scoped>
	.loading {
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
	}
	.loading img {
		height:100%;
	}
	.coverImg {
		position: relative;
	}
	.coverImg span {
		position: absolute;
		top:10px;
		right:0;
		background-color: #788282;
		width:16vw;
		height:20px;
		color: #fff;
		font-size: 12px;
		line-height: 22px;
		text-align: right;
		padding-right:2vw;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		background: url("../../../static/img/eye.png") no-repeat;
		background-position: 9px center;
		background-color: #788282;
	}
	.site {
		height:30px;
		line-height: 30px;
		color: #666;
		font-size: 18px;
		padding-left:2.7vw;
		background-color: #fff;
		margin-top: 4px;
	}
	.organizer {
		height:30px;
		display: flex;
		align-items:center;
		padding-left:2.7vw;
		background-color: #fff;
		margin-bottom: 12px;
	}
	.organizer span:nth-child(1) {
		font-size: 14px;
		color: #008842;
		margin-right: 6px;
	}
	.organizer span:nth-child(2) {
		font-size: 12px;
		color: #999;
		padding-left: 6px;
		position: relative;
	}
	.organizer span:nth-child(2):before {
		position: absolute;
		left:0;
		top:2px;
		height:12px;
		content: "";
		display: block;
		border-left: 1px solid #999;
	}
	ul {
		background-color: #fff;
	}
	ul li {
		height:50px;
		border-bottom:1px solid #f1f1f1;
		padding-left: 36px;
		display: flex;
		align-items:center;
	}
	ul li span {
		color: #666;
		font-size: 14px;
	}
	ul li span:nth-child(1) {
		text-align-last: justify;		
		width:22.7vw;
	}
	.activityTime {
		background: url("../../../static/img/clock1.png") no-repeat;
		background-position: 10px center;
	}
	.deadline {
		background: url("../../../static/img/clock1.png") no-repeat;
		background-position: 10px center;
	}
	.activitySite {
		background: url("../../../static/img/locationIco.png") no-repeat;
		background-position: 10px center;
	}
	.charge {
		background: url("../../../static/img/chargeIco.png") no-repeat;
		background-position: 10px center;
		
	}
	.charge span {
		color: red;
	}
	.announcer {
		background: url("../../../static/img/organizer.png") no-repeat;
		background-position: 10px center;
	}
	.toRegister {
		position: fixed;
		right:4vw;
		bottom: 20px;
		width:60px;
		height:60px;
		line-height: 80px;
		font-size: 12px;
		
		color: #fff;
		border-radius: 30px;
		text-align: center;
		background:  url("../../../static/img/flagIco.png") no-repeat;
		background-position: center 10px;
		background-color: #76d49b;
	}
	.ifRegister {
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background-color: rgba(0,0,0,.6);
	}
	.subRegister {
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom: 0;
		margin:auto;
		width:300px;
		height:126px;
		background-color:#fff ;
		border-radius: 8px;
	}
	.subRegister p {
		height:50%;
		display: flex;		
	}
	.subRegister p span {
		padding: 8px 8px;
	}
	.subRegister p:nth-child(1) {		
		align-items:center;
		padding-left: 20px;
		color: #666;
		font-size: 16px;
	}
	.subRegister p:nth-child(2) {
		justify-content:flex-end;
		align-items:center;
		font-size: 16px;
	}
	.subRegister p:nth-child(2) span:nth-child(2) {
		margin:0 20px ; 
		color: #76d49b;
	}
	.success {
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background-color: rgba(0,0,0,.6);
	}
	.subSuccess {
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom: 0;
		margin:auto;
		width:150px;
		height:150px;
		line-height: 150px;
		font-size: 30px;
		font-family: "楷体";
		font-weight: bolder;
		background-color:#000 ;
		color: #fff;
		text-align: center;
		border-radius: 8px;
	}
</style>