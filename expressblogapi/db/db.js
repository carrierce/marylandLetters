const environment = process.env.NODE_ENV || 'development';
const appRoot = require('app-root-path');
const knex = require('knex');
const config = require(appRoot + '/knexfile')[environment];

const db = knex(config);

module.exports = db;
