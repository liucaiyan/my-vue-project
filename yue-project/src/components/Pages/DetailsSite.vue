<template>
	<div class="fatherBox">
		<detailsSite-header v-bind:childHeadText="thisPageHead"></detailsSite-header>
		<details-model :getRoot="desciptionRoot[rootId]"></details-model>
	</div> 
</template>

<script>
	import detailsRun_head from '../HomeComponents/childPage_header'
	import detailsModel from '../HomeComponents/detailModel'
	export default {
		name:"detailsRun",
		data() {
			return {
				thisPageHead:"约行",	
				rootId:Number(this.$route.query.id),//一定要转换为数字	
				desciptionRoot:["/static/jsonData/travelDetail_1.json","/static/jsonData/travelDetail_2.json","/static/jsonData/travelDetail_3.json","/static/jsonData/travelDetail_4.json"]
			}
		},		
		components:{
			"detailsSite-header":detailsRun_head,
			"details-model":detailsModel
		}
	}
</script>

