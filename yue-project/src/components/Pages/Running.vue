<template>
    <div class="fatherBox">
      <runnning-header v-bind:msg="headText" v-bind:aimUrl="imgSrc" v-on:openMenu="confirmClick">     	
      </runnning-header>
      <home-hot></home-hot>
      <run-apply></run-apply>
      <run-mask v-bind:getBol="bol" v-on:telFather="confirmClick"></run-mask>
      <runnning-footer></runnning-footer>
    </div>
</template>

<script>
	import runningHeader from '../HomeComponents/page_header.vue'
	import Apply from '../HomeComponents/applyList.vue'
	import runningFooter from '../HomeComponents/page_footer'

	export default {
		name:"runnning",
		data() {
			return {
				bol:false,
				headText:"约跑",
				imgSrc:"static/img/headMenu.png"
			}
		},
		components:{
			"runnning-header":runningHeader,
			"run-apply":Apply,
			"runnning-footer":runningFooter
		},
		methods:{
			confirmClick:function() {
				this.bol=!this.bol
			}
		}
	}
</script>