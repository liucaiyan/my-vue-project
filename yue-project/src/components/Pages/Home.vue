<template>
    <div class="fatherBox">
      <home-header v-bind:msg="headText" v-bind:aimUrl="imgSrc" v-on:openMenu="popMask"></home-header> 
      <home-swiper></home-swiper>  
      <home-nav></home-nav>  
      <home-hot></home-hot>
      <home-sceney></home-sceney>
      <home-footer></home-footer>
    </div>
</template>

<script>
	import homeHeader from '../HomeComponents/page_header'
	import swiper from '../HomeComponents/homeSwiper'
	import homeNav from '../HomeComponents/homeNav'	
	import homeFooder from '../HomeComponents/page_footer'
 
	export default {
		name:"home",
		data() {
			return {
				headText:"Q约",
				imgSrc:"static/img/locationImg.png"
			}
		},
		components:{
			"home-header":homeHeader,
			"home-swiper":swiper,
			"home-nav":homeNav,
			"home-footer":homeFooder
		},
		methods:{
			popMask() {
				alert("开发中")
			}
		}
	}
</script>

<style scoped>
	.fatherBox {
		padding-bottom: 7.50vh;
	}
</style>