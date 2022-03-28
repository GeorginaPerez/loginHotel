const res = require('express/lib/response');
const instance = require('../model/Staff');
const jwt = require('jsonwebtoken')

const staff =(req, res)=>{
    const createStaff = instance({name:req.body.name, lastName:req.body.lastName, rol:req.body.rol, email:req.body.email, passw:req.body.passw });

    createStaff.save(function(err){
        if(err){
            res.status(500).send({status:"error", message: err.message})
        }else{
            res.status(200).send({status:"succes", message:"ok"}) 
        }
    })  
}

 const login = async(req,res) => {
    const{email,passw} = req.body

    const foundUser = await instance.findOne({'$and':[{email},{passw}]})
    if(foundUser){
       const token = createToken(foundUser._id,foundUser.rol)
        res.status(200).send({status:"succes", message:"ok", foundUser, token}) 
    }else{
        res.status(500).send({status:"error", message: "Usuario no encontrado"})

    }
}

const createToken =(_id,rol)=>{
    const token = jwt.sign({_id: _id, rol:rol, access: true}, 'Gdn&$123', {expiresIn:200});
    return token;
}


module.exports = {staff, login}
