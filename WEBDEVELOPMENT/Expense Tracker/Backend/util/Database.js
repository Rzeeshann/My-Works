const Sequelize = require('sequelize')

const sequelize = new Sequelize('expensetracker','root','zeeshansk',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize

