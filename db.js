'use strict';

var Sequelize = require('sequelize');

var db = {};
db.sequelize = new Sequelize('cube', 'fabio', '123456', {host: 'hyrule', dialect: 'postgres'});
db.Sequelize = Sequelize;

module.exports = db;
