const pg = require('./pg');

async function listFeatured() {
	let result = await pg.query('SELECT * FROM links WHERE feature = true;')
	return result.rows;
}

module.exports = {
	listFeatured
}