<script setup>
let darkmode = useDarkmode()

onMounted(() => {
	const isDarkModePreferred = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	darkmode.value = isDarkModePreferred

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (event) => {
			darkmode.value = event.matches;
		});

	console.log(darkmode.value)

})
</script>


<template>
	<div>
		<Html :class="{'dark': darkmode}"></Html>
		<Body class="antialiased mx-auto max-w-6xl xl:px-0 dark:bg-black"></Body>
		<NuxtLayout>
		<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<style>
</style>