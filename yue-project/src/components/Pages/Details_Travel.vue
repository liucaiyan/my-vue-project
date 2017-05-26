<template>
	<div class="fatherBox">
		<detailsTravel-header v-bind:childHeadText="thisPageHead"></detailsTravel-header>
		<div class="runAndTravel">
			<router-link :to="toRun">约行</router-link>
			<a href="">约行</a>
		</div>
		<travel-scenery></travel-scenery>
	</div>
</template>

<script>
	import detailsTravel_head from '../HomeComponents/childPage_header'
	import travelScenery from '../HomeComponents/scenery'

	export default {
		name:"detailsTravel",
		data() {
			return {
				thisPageHead:"我的约行",
				toRun:"/details_run"
			}
		},
		components:{
			"detailsTravel-header":detailsTravel_head,
			"travel-scenery":travelScenery
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
	.runAndTravel a:nth-child(2) {
		color: #76d49b;
	    border-bottom: 3px solid #76d49b;
	}
</style>