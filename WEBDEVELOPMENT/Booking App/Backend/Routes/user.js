const { Router } = require('express')

const express = require('express')

const router = express.Router()

const userController = require('../Controllers/user')

router.post('/post',userController.postDetails)

router.get('/get',userController.getDetails)

router.delete('/delete/:email', userController.deleteUser )

module.exports = router
