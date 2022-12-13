const Sequelize  = require('sequelize')

const sequelize = require('../util/Database')

const User = sequelize.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    My_Expense_Amount:{
        type: Sequelize.STRING,
    },

    Choose_Description:{
        type: Sequelize.STRING,
    },

    Choose_a_category: {
        type:Sequelize.STRING
    }

})

module.exports= User