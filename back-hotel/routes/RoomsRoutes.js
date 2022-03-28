const express = require ('express')

//usando router, funcion de express para haceder a los metos post, get, delete, etc
const router = express.Router();
const controller = require('../controller/RoomsController')

// se indica a la funcion que metodo va a a hacer la ruta
router.post("/rooms",controller.room)
router.get("/consultRooms", controller.consultRooms)
router.get("/consultRoomsById", controller.consultRoomById)
router.post("/updateRoom", controller.updateRoom)
router.post("/deleteData", controller.deleteData)




module.exports=router