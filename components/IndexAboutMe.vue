<script setup>

let experiencedWith = [
	'Node.js',
	'Rust',
	'Elixir',
	'MongoDB',
	'PostgreSQL',
	'Redis',
	'Vue.js ',
	'HTML/CSS ',
	'Web Design',
	'Web Development',
	'Kubernetes',
	'HashiStack',
	'Proxmox',
	'ESXi',
	'Ansible',
	'Terraform',
	'Arduino'
];

</script>

<template>
	<section class="sm:flex py-12">
		<div class="sm:w-11/12">
			<h2 class="mb-6 text-4xl font-semibold font-semibold dark:text-white">
				Om meg
			</h2>
			<p class="relative z-20 mb-3 leading-8 text-slate-900 dark:text-white/90 sm:w-10/12">
				Jeg er en 23år gammel selvlært programmerer og datanerd som elsker å jobbe med teknsike og kompliserte
				problemer rundt programmering og IT. 
			</p>
		</div>
		<div class="sm:w-7/12">
			<h2 class="mb-6 text-3xl font-semibold font-semibold dark:text-white">
				Jeg har erfaring med
			</h2>
			<div class="flex flex-wrap gap-4">
				<p class="max-w-max rounded border border-gray-200 bg-gray-100 px-4 py-1.5 text-sm text-black dark:border-teal-700 dark:bg-teal-800/90 dark:text-white" v-for="name in experiencedWith" :key="name">
					{{name}}
				</p>
			</div>
		</div>
	</section>
</template>