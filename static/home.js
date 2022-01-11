const socket = io();

const counters = document.querySelectorAll('.visitor-counter');

socket.on('count', (count) => {
	for (let counter of counters) {
		counter.innerHTML = count;
	}
})