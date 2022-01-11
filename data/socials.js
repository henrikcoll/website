const pg = require('./pg');

async function list() {
	let result = await pg.query('SELECT * FROM socials;')
	return result.rows;
}

module.exports = {
	list
}