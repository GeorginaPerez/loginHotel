const express = require('express')
const router = express.Router()
const controller = require('../controller/CostumerController')

router.post("/costumers",controller.costumers)

module.exports=router