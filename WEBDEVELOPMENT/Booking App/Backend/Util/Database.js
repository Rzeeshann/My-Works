const Sequelize = require('sequelize')

const sequelize= new Sequelize('bookingapp','root','zeeshansk',{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequelize