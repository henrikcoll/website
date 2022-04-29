<script setup>

let image = '/img/henrikcoll.png';

</script>

<template>
	<section class="sm:flex py-12">
		<div class="sm:w-10/12">
			<h1 class="mb-5 text-2xl font-semibold leading-10 text-gray-800 dark:text-white sm:mb-10 sm:text-3xl lg:text-5xl">
				Hei, Jeg er Henrik!
			</h1>
			<p class="relative z-20 mb-4 text-lg leading-8 text-gray-500 dark:text-white/90 lg:w-10/12">
				Jeg er Hernik Næss, en fullstack utvikler og liker å jobbe med IT.
			</p>
			<p class="relative z-20 mb-10 text-lg leading-7 text-gray-500 dark:text-white/90 lg:w-10/12">
				I fritia liker å henge med venner og fikse på homelabben.
			</p>
		</div>
		<div class="sm:w-3/12 hidden lg:block">
			<img :src="image" alt="memoji">
		</div>
		
	</section>
</template>