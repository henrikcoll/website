<script setup>

let darkmode = useDarkmode()

</script>

<template>
	<div class="max-w-6xl mx-auto pt-6 pb-16">
		<div class="flex items-center justify-between pb-5">
			<a href="/" class="text-5xl font-bold dark:text-white">
			Henrik
			</a>
			<div class="flex items-center">
				<div class="hidden items-center space-x-4 sm:flex">
					<span class="text-teal-500 dark:text-teal-300 font-medium hover:cursor-pointer">
						Hjem</span>
				</div>
				<div class="mx-6 hidden h-8 w-[3px] bg-slate-200 dark:bg-slate-700 sm:block"></div>
				<div class="flex items-center space-x-5">
					<a href="https://twitter.com/henrikcoll">
						<svg class="h-6 w-6 cursor-pointer fill-current text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.84762 20.251C16.3946 20.251 20.5226 13.998 20.5226 8.576C20.5226 8.398 20.5226 8.221 20.5106 8.046C21.3138 7.46453 22.007 6.74462 22.5576 5.92C21.8087 6.25201 21.0142 6.46976 20.2006 6.566C21.0573 6.05306 21.6984 5.24635 22.0046 4.296C21.1993 4.77389 20.3183 5.11073 19.3996 5.292C18.781 4.63377 17.9626 4.19784 17.0712 4.05171C16.1798 3.90558 15.2651 4.0574 14.4687 4.48367C13.6723 4.90994 13.0387 5.58688 12.6659 6.40966C12.2931 7.23245 12.202 8.15519 12.4066 9.035C10.7752 8.95324 9.17922 8.52933 7.72226 7.79077C6.26531 7.05221 4.97994 6.01553 3.94962 4.748C3.42494 5.65121 3.26421 6.72042 3.50015 7.73797C3.7361 8.75551 4.35098 9.64488 5.21962 10.225C4.56688 10.2061 3.92825 10.0305 3.35762 9.713V9.765C3.35801 10.7123 3.68601 11.6303 4.28601 12.3634C4.88602 13.0964 5.72109 13.5994 6.64962 13.787C6.04543 13.9517 5.41151 13.9757 4.79662 13.857C5.05878 14.6725 5.56929 15.3856 6.25674 15.8966C6.94419 16.4076 7.77419 16.691 8.63062 16.707C7.77974 17.3756 6.8054 17.8698 5.76334 18.1615C4.72128 18.4532 3.63194 18.5367 2.55762 18.407C4.43422 19.6113 6.61781 20.2501 8.84762 20.247"></path>
						</svg>
					</a>
					<a href="https://github.com/henrikcoll">
						<svg class="h-6 w-6 cursor-pointer fill-current text-slate-400 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-300" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5576 0C5.03462 0 0.557617 4.484 0.557617 10.017C0.557617 14.442 3.42262 18.197 7.39662 19.521C7.89662 19.613 8.07862 19.304 8.07862 19.038C8.07862 18.801 8.07062 18.17 8.06562 17.335C5.28362 17.94 4.69662 15.992 4.69662 15.992C4.24262 14.834 3.58662 14.526 3.58662 14.526C2.67862 13.906 3.65562 13.918 3.65562 13.918C4.65862 13.988 5.18662 14.95 5.18662 14.95C6.07862 16.48 7.52762 16.038 8.09662 15.782C8.18862 15.135 8.44662 14.694 8.73262 14.444C6.51262 14.191 4.17762 13.331 4.17762 9.493C4.17762 8.4 4.56762 7.505 5.20662 6.805C5.10362 6.552 4.76062 5.533 5.30462 4.155C5.30462 4.155 6.14462 3.885 8.05462 5.181C8.87038 4.95851 9.71205 4.84519 10.5576 4.844C11.4076 4.848 12.2626 4.959 13.0616 5.181C14.9706 3.885 15.8086 4.154 15.8086 4.154C16.3546 5.533 16.0106 6.552 15.9086 6.805C16.5486 7.505 16.9366 8.4 16.9366 9.493C16.9366 13.341 14.5976 14.188 12.3706 14.436C12.7296 14.745 13.0486 15.356 13.0486 16.291C13.0486 17.629 13.0366 18.71 13.0366 19.038C13.0366 19.306 13.2166 19.618 13.7246 19.52C15.7159 18.8521 17.447 17.5753 18.6731 15.87C19.8992 14.1648 20.5585 12.1173 20.5576 10.017C20.5576 4.484 16.0796 0 10.5576 0Z"></path>
						</svg>
					</a>
					<button class="dark:text-white" @click="darkmode = !darkmode">
						<svg xmlns="http://www.w3.org/2000/svg" class="hidden h-6 w-6 cursor-pointer fill-current text-slate-400 hover:text-slate-500 dark:block dark:text-slate-400 dark:hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer fill-current text-slate-400 hover:text-slate-500 dark:hidden dark:text-slate-400 dark:hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
					</button>
				</div>
			</div>
		</div>
		<div class="flex items-center space-x-4 sm:hidden">
			<span class="text-teal-500 dark:text-teal-300 font-medium hover:cursor-pointer">
				Home
			</span>
		</div>
	</div>
</template>
