const minio = require('./minio');
const config = require('../config');

async function listAll(prefix) {
	
	const stream = await minio.listObjectsV2('heka', prefix ?? '', false);
	const files = [];

	stream.on('data', (file) => {
		files.push({
			...file,
			url: `${config.files.url}/${config.files.bucket}/${encodeURIComponent(file.name ?? file.prefix)}`
		});
	});

	return new Promise((resolve) => {
		stream.on('end', () => resolve(files));
	});
}

module.exports = {
	listAll
}