const express = require ('express')
const router = express.Router();
const controller = require('../controller/UserController')

router.post("/user", controller.user)

module.exports=router