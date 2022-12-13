const Sequelize = require('sequelize')

const sequelize = require('../Util/Database')

const User = sequelize.define('users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    // allowNull: false,
    
  } , 
  emailid:{
    type: Sequelize.STRING,
    // allowNull: false,
  },
  number:{
    type: Sequelize.STRING,
    // allowNull: false,
  }

})

module.exports= User
