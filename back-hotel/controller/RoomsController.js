const res = require('express/lib/response');
const instance = require ('../model/Rooms');

const room = (req, res)=>{
    console.log(req.body)
    const registro = instance({typeRoom:req.body.type,price:req.body.price, numberFloor:req.body.floor, status:req.body.status});

    registro.save(function(err){
        if(err){
            res.status(500).send({status:"error", message: err.message})
         
        }else{
            res.status(200).send({status:"succes", message:"ok"})

        }
    })
}

//FIND
const consultRooms = async(req,res)=>{
    const findRooms = await instance.find();
    res.status(200).send({findRooms})
}

//FIND BY ID
const consultRoomById = async(req,res)=>{
    const findRoomsById=await instance.findById();
    res.status(200).send({findRoomsById}) 
}

//UPDATE
const updateRoom = (req, res)=>{
    const updateRoom = instance.updateOne({_id:req.body._id},{
        $set:{
            typeRoom:req.body.type,
            price:req.body.price,
            numberFloor:req.body.floor,
            status:req.body.status
        }    
        //$set:req.body
    },
    function(err, info){
        if(err){
            res.json({
                result:false,
                msg:"Failed update",
                err
            });
        }else{
            res.json({
                result:true,
                info:info
            })
        }     
    })
}

//DELETE
const deleteData = async(req, res)=>{
    const deleteData= await instance.deleteOne({_id:req.body._id})
    res.status(200).send({deleteData})
    
}


module.exports ={
    room, consultRooms, consultRoomById, updateRoom, deleteData
}