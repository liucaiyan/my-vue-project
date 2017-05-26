<template>
    <div class="fatherBox">
       <user-header v-bind:msg="headText" v-bind:aimUrl="imgSrc" v-on:openMenu="confirmClick">      	
       </user-header> 
		<div class="userFace">
			<p class="figure">
				<span></span>
			</p>
			<p class="logAndReg">
				<router-link :to="toLogIn">登录</router-link>
				<router-link :to="toRegister">注册</router-link>
			</p>
		</div>
		<div class="board">
			<router-link :to="toPublish">发布</router-link>
			<router-link :to="toRun">约跑</router-link>
			<router-link :to="toTravel">约行</router-link>
		</div>
		<ul class="infoList">
			<li>
				<a href="">
					<span>学生认证</span>
					<span>&gt;</span>
				</a>
			</li>
			<li>
				<a href="">
					<span>我的详情</span>
					<span>&gt;</span>
				</a>
			</li>
			<li class="information">
				<a href="">
					<span>消息通知</span>				
					<span>&gt;
						<span>4</span>
					</span>	
				</a>			
			</li>
			<li>
				<a href="">
					<span>邀请好友</span>
					<span>&gt;</span>
				</a>
			</li>
			<li>
				<a href="">
					<span>选择高校</span>
					<span>&gt;</span>
				</a>
			</li>
			<li>
				<a href="">
					<span>设置</span>
					<span>&gt;</span>
				</a>
			</li>
			<li class="serviceTel">
				<a href="">
					<span>联系客服</span>				
					<span>&gt;
						<span>18520064570</span>
					</span>	
				</a>			
			</li>
		</ul>
       <run-mask v-bind:getBol="bol" v-on:telFather="confirmClick"></run-mask>
       <user-footer></user-footer>
    </div>
</template>

<script>

import userHeader from '../HomeComponents/page_header.vue'
import userFooter from '../HomeComponents/page_footer'

	export default {
		name:"user",
		data() {
			return {
				toRegister:"/register",
				toLogIn:"/login",
				toPublish:"/publish",
				toRun:"/running",
				toTravel:"/travel",
				bol:false,
				headText:"我的",
				imgSrc:"static/img/headMenu.png",

			}
		},
		components:{
			"user-header":userHeader,
			"user-footer":userFooter
		},
		methods:{
			confirmClick:function() {
				this.bol=!this.bol
			}
		}
	}
</script>

<style scoped>
	.userFace {		
		background-color: #76d49b;
		height:22.49vh;
	}
	.figure {
		display: flex;
		justify-content:center;
		align-items:center;
		height:90px;
	}
	.figure span {		
		width:90px;
		height:90px;
		border-radius: 12vw;
		background-image:url("../../../static/images/user-img4.png") ; 
		background-size: 80px 80px;
		position: 0 0;
	}
	.logAndReg {
		display: flex;
		justify-content:center;
		margin-top: 1.50vh;
	}
	.logAndReg a {
		width:21.33vw;
		height:35px;
		line-height:5.25vh;		
		text-align: center;
		font-weight: bolder;
	}
	.logAndReg a:nth-child(1) {
		color:#fff;
		background-color: #2ad2c9;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	.logAndReg a:nth-child(2) {
		color:#2ad2c9;
		background-color: #fff;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	.board {
		display: flex;
		margin-bottom: 1.50vh;
	}
	.board a {
		flex:1;
		text-align: center;
		height:9.0vh;
		line-height: 9.0vh;
		background-color: #fff;
		position: relative;
		font-size: 14px;
		color: #666;
	}
	.board a:nth-child(2):before {
		content: "";
		display:block;
		height:6.0vh;
		border-left:1px solid #89f0eb;
		position: absolute;
		left:0;
		top:10px;
	}
	.board a:nth-child(2):after {
		content: "";
		display:block;
		height:40px;
		border-right:1px solid #89f0eb;
		position: absolute;
		right:0;
		top:1.50vh;
	}
	.infoList {
		background-color: #f5f5f5;	
		font-family:"宋体";			
	}

	.infoList li {
		height:6.75vh;		
		padding-left: 10.67vw;		
		border-bottom: 1px solid #f5f5f5;
	}
	.infoList li:nth-child(5) {
		margin-bottom: 1.50vh;
	}
	li>a {
		display: block;
		height:6.75vh;
		display: flex;
		justify-content:space-between;
		align-items:center;
	}
	.infoList li span {
		font-size: 14px;
		color:#555;
	}
	.infoList li span:nth-child(2) {
		margin-right: 4vw;
		color: #999;
	}
	.information {
		margin-bottom: 1.50vh;
	}
	.information span:nth-child(2) {
		position: relative;
	}
	.information span:nth-child(2)>span {
		position: absolute;
		left:-24px;
		top:2px;
		width:16px;
		height:16px;
		text-align: center;
		line-height: 16px;
		border-radius: 8px;
		color: #fff;
		background-color: red;
	}
	.serviceTel span:nth-child(2) {
		position: relative;
	}
	.serviceTel span:nth-child(2)>span {
		position: absolute;
		left:-26.67vw;
		top:0;
		color: #999;
	}
	.infoList li:nth-child(1) {
		background: url("../../../static/images/user-cert.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(2) {
		background: url("../../../static/images/user-detail.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(3) {
		background: url("../../../static/images/message.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(4) {
		background: url("../../../static/images/user-addfriend.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(5) {
		background: url("../../../static/images/user-school.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(6) {
		background: url("../../../static/images/user-set.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
	.infoList li:nth-child(7) {
		background: url("../../../static/images/user-call.png") no-repeat;
		background-position:2.67vw 1.50vh;
		background-size: 24px 24px; 
		background-color:#fff;
	}
</style>