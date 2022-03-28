const res = require('express/lib/response');
const instance = require ('../model/Costumers');

const costumers = (req,res)=>{
    const createCostumer = instance ({name:req.body.name, lastName:req.body.lastName, address:req.body.address, age:req.body.age, city:req.body.city, country:req.country, phoneNumber:req.body.phoneNumber, email:req.body.email})

    createCostumer.save(function(err){
        if(err){
            res.status(500).send({status:"error", message:err.message})
        }else{
            res.status(200).send({status:"succes",message:"ok"})
        }
    })

}

module.exports={costumers}
