<template>
    <div class="fatherBox">
      <register-header :childHeadText="thisPageHead"></register-header>
      <div class="registerWrap">
      	<form @click.stop>
	      	<div class="regi_title">welcome to Qu 约</div>
	      	<div class="regi_img">
	      		<img src="../../../static/images/logo.png" alt="">
	      	</div>
	      	<p class="form_p1">
	      		<input type="tel" placeholder="手机号" v-on:blur="verifyTel" v-model.trim="tel"  @input="inpTel">
	      		<span v-if="bolTel" class="telTips">{{errTelTips}}</span>
	      	</p>
	      	<p class="form_p2">
	      		<input type="password" placeholder="密码" v-on:blur="verifyPassword" v-model.trim="password"  @input="inpPas">
	      		<span v-if="bolPas" class="passwordTips">*密码不能为空</span>
	      	</p>
	      	<p class="form_p3">
	      		<input type="code" placeholder="验证码" v-on:blur="verifyCode" v-model.trim="code"  @input="inpCode"><span class="getCode">获取验证码</span>
	      		<span v-if="bolCode" class="codeTips"></span>
	      	</p>
	      	<span class="registerBtn" @click="toRegister">注册</span>
	      	<div class="logInDirect">
		      	<p>
		      		<span>已有帐号？</span>
		      		<router-link :to="toLogIn">登录&gt;&gt;</router-link>
		      	</p>
	      	</div>
	      </form>	      
      </div>

      <div class="popBox"  v-if="bolBack" @click="shutDown">
		<div class="textBox"  @click.stop>
			<p v-text="callback1"></p>
			<p>
				<span v-text="seconds"></span>
				<span v-text="callback2"></span>
			</p>
		</div>
	  </div>
	  <div class="popErr" v-if="errText">请正确填写</div>
    </div>
</template>

<script>
	import registerHeader from '../HomeComponents/childPage_header'
	export default {
		name:"registerPage",
		data() {
			return {
				thisPageHead:"注册",
				toLogIn:"/login",
				tel:"",
				password:"",
				code:"",
				bolTel:false,
				errTelTips:"",
				bolPas:false,
				bolCode:false,
				bolBack:false,
				callback1:"注册成功！",
				callback2:"秒后跳转页面！",
				seconds:3,
				timer:0,
				errText:false
			}
		},
		methods:{
			verifyTel() {
				var pattern = /^1\d{10}$/;
				if(!this.tel) {
					this.bolTel = !this.bolTel;
					this.errTelTips = "手机号不能为空";
				}
				if(this.tel&&!pattern.test(this.tel)) {
					this.bolTel = !this.bolTel;
					this.errTelTips = "请正确填写";
				}				
			},
			verifyPassword() {
				if(!this.password) {
					this.bolPas = !this.bolPas;
				}
			},
			verifyCode() {
				if(!this.code) {
					this.bolCode = !this.bolCode;
				}
			},
			inpTel() {
				if(this.tel) {
					this.bolTel = false;
				}
			},
			inpPas() {
				this.bolPas = false;
			},
			inpCode() {
				this.bolCode = false;
			},
			removeErr() {
				this.errText = false;
			},
			countDown() {
				this.seconds--;
				if(this.seconds === 0) {
					this.bolBack = false;
					clearInterval(this.timer);
					this.seconds = 3;
					// location.href = "http://localhost:8080/login#/login"
					this.$router.push("/login")//router插件的重定向
				}
			},
			toRegister() {
				if(this.tel&&this.password&&this.code&&!this.errTelTips) {
					this.bolBack = true;				
					this.timer = setInterval(this.countDown,1000)
				}else{
					this.errText = true;
					setTimeout(this.removeErr,1000)
				}				
			},
			shutDown() {
				this.bolBack = false;
				clearInterval(this.timer);
				this.seconds = 3;
				this.$router.push("/login")
			}
		},			
		components:{
			"register-header":registerHeader
		}
	}
</script>

<style scoped>
	.popErr {
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
		margin: auto;
		width:110px;
		height:60px;
		line-height: 60px;
		text-align: center;
		color: #fff;
		font-size: 16px;
		font-weight: bolder;
		border-radius: 6px;
		background-color:rgba(0,255,111,0.71);
	}
	.popBox {
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background-color: rgba(0,0,0,.6);
	}
	.textBox {
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		margin: auto;
		width:50vw;
		height:50vw;
		background-color:#03f4d0;
		color: #fff;
		font-size: 18px;
		font-weight: bolder;
		border-radius: 4vw;
		text-align: center;
	}
	.textBox p {
		height:30%;	
		line-height: 87px;	
	}
	.regi_title {
		height:100px;
		line-height: 100px;
		font-size: 20px;
		text-align: center;
		color: #fff;
	}
	.regi_img {
		height:150px;
		display: flex;
		justify-content:center;
		align-items:center;
	}
	.regi_img img {
		width:74px;
		height:90px;
	}
	form {
		height:92.5vh;
		background-color: #323542;
	}
	.form_p1 {
		width:300px;
		height:40px;
		background-color: #464955;
		margin: 0 auto 30px auto;
		border-radius: 4px;
		position: relative;
	}
	.form_p1 .telTips {
		position: absolute;
		left:0;
		top:45px;
		color: red;
		font-size: 14px;
	}
	
	.form_p1 input {
		width:260px;
		height:34px;
		margin-left: 40px;
		background-color: #464955;
		color: #a9a694;
		outline: none;
		border:none;
		margin-top: 2px;
		color: #fff;
		font-size: 18px;
	}
	.form_p2 {
		width:300px;
		height:40px;
		background-color: #464955;
		margin: 0 auto 30px auto;
		border-radius: 4px;
		position: relative;
	}
	.form_p2 .passwordTips {
		position: absolute;
		left:0;
		top:45px;
		color: red;
		font-size: 14px;
	}
	.form_p2 input {
		width:260px;
		height:34px;
		margin-left: 40px;
		background-color: #464955;		
		outline: none;
		border:none;
		margin-top: 2px;
		color: #fff;
		font-size: 18px;
	}
	.form_p3 {
		width:300px;
		height:40px;
		background-color: #464955;
		margin: 0 auto 30px auto;
		border-radius: 4px;
		position: relative;
	}
	.form_p3 .codeTips {
		position: absolute;
		left:0;
		top:45px;
		color: red;
		font-size: 14px;
	}
	.form_p3 input {
		width:148px;
		height:34px;
		margin-left: 40px;
		background-color: #464955;		
		outline: none;
		border:none;
		margin-top: 2px;
		color: #fff;
		font-size: 18px;
	}
	.form_p3 .getCode {
		display: inline-block;
		width:111px;
		height:40px;
		background-color: #0bd38a;
		text-align: center;
		line-height: 40px;
		color: #fff;
		outline: none;
		border:none;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.registerBtn {
		display: block;
		margin: 0 auto;
		width:300px;
		height:40px;
		background-color: #0bd38a;
		color: #fff;
		text-align: center;
		line-height: 40px;
		font-size: 3.0vh;
		outline: none;
		border:none;
		border-radius: 4px;

	}
	.logInDirect p {
		width:300px;
		height:9.0vh;
		display: flex;
		justify-content:flex-end;
		align-items:center;
		margin: 0 auto;
	}
	.logInDirect span,.logInDirect a {
		color: #5b5d68;
	}

</style>