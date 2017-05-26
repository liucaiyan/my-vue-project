<template>
	<div class="sceneryBox">
		<ul>
			<li v-for="(item,index) in sceneryList">
				<router-link :to="sites+'?id='+index">
					<img v-bind:src="item.ImgSrc">
					<span class="tips tips1">{{item.cost}}</span>
					<span class="tips tips2">{{item.apply}}</span>
					<span class="tips tips3">{{item.already}}</span>
					<p class="li_p1">
						<span id="p1_s1">{{item.site}}</span>
						<span id="p1_s2">{{item.people}}</span>						
					</p>
					<p class="li_p2">
						<span id="p2_s1">{{item.promulgator}}</span>
						<span>{{item.date}}</span>
					</p>
				</router-link>
			</li>
		</ul>		
	</div>
</template>

<script>
	export default {
		name:"scenery",
		data() {
			return {
				sites:"/detailsSite",
				sceneryList:[
				{ImgSrc:"../../../static/images/hd1.jpg",cost:"免费",apply:"正在报名",already:"761人报名",site:"庐山游",people:"3081",promulgator:"小飞侠",date:"2017-02-28 13:37:50"},
				{ImgSrc:"../../../static/images/y-banner01.jpg",cost:"免费",apply:"正在报名",already:"486人报名",site:"城市狂欢",people:"1124",promulgator:"终结者",date:"2017-03-28 13:57:50"},
				{ImgSrc:"../../../static/images/y-banner03.jpg",cost:"免费",apply:"正在报名",already:"235人报名",site:"一日游",people:"1265",promulgator:"答案",date:"2017-03-28 13:57:50"},
				{ImgSrc:"../../../static/images/y-banner02.jpg",cost:"免费",apply:"正在报名",already:"195人报名",site:"城市狂欢",people:"1124",promulgator:"滑翔机",date:"2017-03-28 13:57:50"}
				]
			}
		}
	}
</script>

<style scoped>
	.sceneryBox {				
		background-color: #fff;
	}
	ul {
		margin:10px 8px;
		position: relative;
	}
	li {
		margin-bottom:10px; 
		border-bottom: 1px solid #f5f5f5;
		position: relative;
	}
	li p {
		line-height: 100%;
		display: flex;
		justify-content:space-between;
	}
	.li_p1 {
		margin: 10px 0;
	}
	.li_p2 {
		margin-bottom: 10px;
	}
	li p span:nth-child(1) {
		margin-left: 10px;
	}
	li p span:nth-child(2) {
		margin-right: 10px;
		color: #b1b9ba;
		font-size: 14px;
	}
	 #p1_s1 {
		font-size: 18px;
		color: #666;
	}
	 #p2_s1  {
		font-size: 14px;
		color: #008842;
	}
	#p1_s2 {
		padding-left: 50px;
		background: url("../../../static/images/scan.png") no-repeat;
		background-position: 30px 0;
	}
	.tips {
		position: absolute;
	}
	.tips1 {
		width:35px;
		height:22px;
		line-height: 22px;
		text-align: center;
		background-color: #61e15f;
		border-radius: 2px;
		color: #fff;
		font-size: 12px;
		top:15px;
		left:4%;
		border-radius: 2px;
	}
	.tips2 {
		top:110px;
		left:4%;
		width:75px;
		height:25px;
		line-height: 25px;
		text-align: center;
		background-color: #085a8f;
		color: #fff;
		font-size: 12px;
		border-radius: 4px;
	}
	.tips3 {
		top:15px;
		right:0;
		padding:1px 6px;
		height:20px;
		line-height: 20px;
		color: #fff;
		font-size: 12px;
		text-align: center;
		background-color: #7d8582;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	
</style>