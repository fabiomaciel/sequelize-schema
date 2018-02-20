var db = require('./db');
var Sequelize = db.Sequelize;

var Test = db.sequelize.define('test', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: 'id',
		allowNull: false
	},
	nome: {
		type: Sequelize.STRING,
		field: 'nome',
		allowNull: false
	}

}, {
	timestamps: false,
	tableName: 'test'
});


module.exports = Test;
