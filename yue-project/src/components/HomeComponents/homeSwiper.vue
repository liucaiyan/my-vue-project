<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<a href="" class="swiper-slide" onclick="return false"><img src="/static/images/y-banner01.jpg" alt=""></a>
			<a href="" class="swiper-slide" onclick="return false"><img src="/static/images/y-banner03.jpg" alt=""></a>		
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import SwiperJs from '../../../static/swiper.min.js'
	import SwiperCss from '../../../static/swiper.min.css'

	export default {
		name:"headSwiper",
		methods: {
			init() {
				new Swiper(".swiper-container", {
		            pagination: ".swiper-pagination",
		            loop: true,
		            autoplay: 1500
		        })
			}
		},
		mounted () {
			this.init();
		}
	}	
</script>

<style>

	.swiper-container {
		width:100%;
		height:28.49vh;
	}
</style>

