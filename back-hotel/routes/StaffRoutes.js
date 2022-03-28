const express = require('express');
const router = express.Router();
const controller = require('../controller/StaffController');
const { route } = require('./RoomsRoutes');

router.post("/staff",controller.staff)
router.post("/login", controller.login)

module.exports=router

