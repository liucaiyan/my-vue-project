<template>
    <div class="fatherBox">
      <travel-header v-bind:msg="headText" v-bind:aimUrl="imgSrc" v-on:openMenu="confirmClick">    	
      </travel-header>
      <home-hot></home-hot>
      <home-sceney></home-sceney>
      <home-sceney></home-sceney>
      <home-sceney></home-sceney>
      <home-sceney></home-sceney>
      <run-mask v-bind:getBol="bol" v-on:telFather="confirmClick"></run-mask>
      <travel-footer></travel-footer>
    </div>
</template>

<script>

	import travelHeader from '../HomeComponents/page_header.vue'
	import travelFooter from '../HomeComponents/page_footer'			
	export default {
		name:"travel",
		data() {
			return {
				bol:false,
				headText:"约行",
				imgSrc:"static/img/headMenu.png"
			}
		},
		components:{
			"travel-header":travelHeader,
			"travel-footer":travelFooter
		},
		methods:{
			confirmClick:function() {
				this.bol=!this.bol
			}
		}
	}
</script>

<style>

</style>