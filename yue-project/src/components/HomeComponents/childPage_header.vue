<template>
	<div class="registerHeader">
      	<a href="javascript:history.back()">&lt;</a>
      	<span v-text="childHeadText"></span>
     </div class="">
</template>

<script>
	export default {
		name:"childPageHeader",
		props:["childHeadText"],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.registerHeader {
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height:7.5vh;
		background-color: #76d49b;
		color: #fff;
		font-weight: bolder;
		z-index: 100;
		display: flex;
		align-items:center;
	}
	.registerHeader a {
		margin-right: 5%;
		color: #fff;
		font-size: 20px;
		width:50px;
		height:50px;
		line-height: 50px;
		text-align: center;
		font-family:"宋体";
		font-weight: bolder;
	}	
</style>