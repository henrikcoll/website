const { Client } = require('pg');
const config = require('../config');

const client = new Client();

client.connect();

module.exports = client;