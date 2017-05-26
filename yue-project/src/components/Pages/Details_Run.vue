<template>
	<div class="fatherBox">
		<detailsRun-header :childHeadText="thisPageHead"></detailsRun-header>
		<div class="runAndTravel">
			<a href="">约跑</a>
			<router-link :to="toTravel">约行</router-link>
		</div>
		<run-scenery></run-scenery>
	</div>
</template>

<script>
	import detailsRun_head from '../HomeComponents/childPage_header'
	import runScenery from '../HomeComponents/scenery'

	export default {
		name:"detailsRun",
		data() {
			return {
				thisPageHead:"我的约跑",
				toTravel:"/details_travel"
			}
		},
		components:{
			"detailsRun-header":detailsRun_head,
			"run-scenery":runScenery
		}
	}
</script>

<style scoped>
	.runAndTravel {
		height:6.90vh;		
	}
	.runAndTravel a {
		float: left;
		font-size: 14px;
		height:6.90vh;
		width:50vw;
		line-height:6.90vh;
		text-align: center;
		background-color: #fff;
	}
	.runAndTravel a:nth-child(1) {
		color: #76d49b;
	    border-bottom: 3px solid #76d49b;
	}
</style>