<script setup>
useHead({
  bodyAttrs: {
    class: 'antialiased mx-auto max-w-6xl xl:px-0'
  }
})
</script>


<template>
	<div>
		<NuxtLayout>
		<NuxtPage/>
		</NuxtLayout>
	</div>
</template>

<style>
body {
	background: black;
	padding: 0 1rem;
}
</style>