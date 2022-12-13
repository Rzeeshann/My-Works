const Sequelize = require('sequelize');

const sequelize = new Sequelize('new_schema', 'root', 'zeeshansk', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
