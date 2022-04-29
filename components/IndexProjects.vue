<script setup>

let projects = [
	{
		type: 'side',
		key: 'ding',
		title: 'Ding',
		tech: 'Rust',
		description: 'En server / cli verktøy for å sende notifikasjon når kommandoer er ferdig med å kjøre.',
		link: {
			text: 'heka.no/ding',
			addr: 'https://heka.no/ding'
		},
		source: {
			text: 'GitHub',
			addr: 'https://github.com/henrikcoll/ding-server'
		}
	},
	{
		type: 'work',
		key: 'ding',
		title: 'Loggmeg',
		tech: 'Node.js, PostgreSQL, Keycloak',
		description: 'Webbapp for å lage plakater med qr-kode som besøkende kan skanne for å registrere besøk',
		link: {
			text: 'loggmeg.no',
			addr: 'https://loggmeg.no'
		},
		source: null
	}
]

</script>

<template>
	<section class="py-12">
		<h2 class="mb-12 text-4xl font-semibold text-black dark:text-white">
			Prosjekter
		</h2>
		<div class="space-y-16">
			<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
				<div v-for="project in projects" :key="project.key" class="flex flex-col justify-between rounded">
					<p v-if="project.type === 'work'" class="text-red-700 bg-red-100 text-xs mb-3 px-3 py-1 rounded max-w-max font-semibold tracking-wider uppercase">
						Jobb
					</p>
					<p v-if="project.type === 'side'" class="text-teal-700 bg-teal-100 text-xs mb-3 px-3 py-1 rounded max-w-max font-semibold tracking-wider uppercase">
						Sideprosjekt
					</p>
					<h3 class="dark:text-white text-xl mb-1 font-semibold">
						{{project.title}}
					</h3>
					<p class="text-gray-500 dark:text-white mb-3 text-sm">
						{{project.tech}}
					</p>
					<p class="text-gray-500 dark:text-white mb-5">
						{{project.description}}
					</p>
					<div class="flex flex-col">
					<a :href="project.link.addr" class="text-teal-600">
						<span class="font-medium">
							{{project.link.text}}
						</span>
						→
					</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>