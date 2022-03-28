const express = require('express')
const app = express()
const cors = require('cors')
const conDB = require('./config/dbConn')
const { route } = require('./routes/RoomsRoutes')
const routeRoom = require('./routes/RoomsRoutes')
const routeUser = require('./routes/UserRoutes')
const routeStaff = require('./routes/StaffRoutes')
const routeCostumer = require('./routes/CostumerRoutes')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// se usa la ruta
app.use("/", routeRoom)
app.use("/", routeUser)
app.use("/",routeStaff)
app.use("/",routeCostumer)

const listener = app.listen(9000, () => {
    console.log("En servicio");
})

conDB();

