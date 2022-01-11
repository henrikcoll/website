const pg = require('./pg');

async function listFeatured() {
	let result = await pg.query('SELECT * FROM projects WHERE feature = true LIMIT 10;')
	return result.rows;
}

module.exports = {
	listFeatured
}