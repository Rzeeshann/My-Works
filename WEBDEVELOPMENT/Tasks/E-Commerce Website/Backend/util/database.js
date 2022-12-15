const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'zeeshansk', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
