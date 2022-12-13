const express = require('express')

const bodyparser= require('body-parser')

const app = express()

const cors = require('cors')

app.use(cors())

app.use(bodyparser.json())


const userModel = require('./Models/user')

const userRoute = require('./Routes/user')

app.use(userRoute)

const sequelize = require('./Util/Database')

sequelize.sync()
.then(res => {
    app.listen(5000)
})
.catch(err => {
    console.log(err);
})