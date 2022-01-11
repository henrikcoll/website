const {
	PORT,
	MINIO_ENDPOINT,
	MINIO_PORT,
	MINIO_USE_SSL,
	MINIO_ACCESSKEY,
	MINIO_SECRETKEY
} = process.env

module.exports = {
	port: PORT ? parseInt(PORT) : 3000,
	minio: {
		endPoint: MINIO_ENDPOINT ?? 'files.heka.no',
		port: MINIO_PORT ? parseInt(MINIO_PORT) : 443,
		useSSL: typeof(MINIO_USE_SSL) === 'string' ? !!MINIO_USE_SSL : true,
		accessKey: MINIO_ACCESSKEY,
		secretKey: MINIO_SECRETKEY
	},
	files: {
		bucket: 'heka',
		url: 'https://files.heka.no'
	}
}