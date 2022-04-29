<script setup>

definePageMeta({
  layout: "home",
});

</script>

<template>
  <div class="py-12">
    <div class="landing lg:h-screen">
		<TheHeader />
        <IndexLanding />
    </div>
	<IndexAboutMe />
	<IndexProjects />
	<TheFooter />
  </div>
</template>
