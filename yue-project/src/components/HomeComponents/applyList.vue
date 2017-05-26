<template>
	<div>
		<ul>
			<li v-for="(item,index) in teamList">
				<p class="clearfix">
					<span class="team"> {{ item.teamName }} </span>
					<span class="register"> {{ info }} </span>
				</p>
				<p> {{item.slogon}} </p>
				<p>
					<span> {{item.organizer}} </span>
					<span> {{item.date}} </span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default	{
		data() {
			return {
				info:"正在报名",
				teamList:[
					{teamName:"晨曦队",slogon:"健康生活",organizer:"motian",date:"2017-5-13 14:60:20"},
					{teamName:"夜跑队",slogon:"另类人生",organizer:"lfgdfn",date:"2017-3-13 15:70:28"},
					{teamName:"娃哈哈队",slogon:"游戏人生",organizer:"ltiyan",date:"2017-3-13 15:70:28"},
					{teamName:"优酸乳队",slogon:"酸酸甜甜就是我",organizer:"liuewyan",date:"2017-3-13 15:70:28"},
					{teamName:"蒙牛队",slogon:"on干嘛把咪哄",organizer:"lfgdfn",date:"2017-3-13 15:70:28"},
					{teamName:"休闲队",slogon:"活出自我",organizer:"xiaofeilong",date:"2017-3-13 16:30:60"}
				]
			}
		}		
	}
</script>

<style scoped>
	li {
		margin:10px 0;
		padding:15px 10px;
		background-color: #fff;
		text-align: left;
	}
	.team {
		float: left;
	}
	.register {
		float: right;
		width:75px;
		height:25px;
		line-height:25px; 
		background-color:#6eace0;
		color:#fff;
		text-align: center;
	}
	li p:nth-child(2) {
		font-size: 14px;
		color:#666;
	}
	li p:nth-child(3) {
		font-size: 12px;
		color:#999;
	}
</style>