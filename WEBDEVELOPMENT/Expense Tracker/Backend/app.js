const express = require('express')

const bodyparser = require('body-parser')

const app = express()

const cors = require('cors')

app.use(bodyparser.json())

app.use(cors())

const userModel = require('./Models/user')

const sequelize = require('./util/Database')

const Route = require('./Routes/user')
app.use(Route)

sequelize.sync()
.then(res => {
    app.listen(3000)
})
.catch(err => {
    console.log(err);
})

