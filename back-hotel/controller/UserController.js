const res = require('express/lib/response');
const instance = require ('../model/Users');

    const user = (req, res)=>{
        const createUser = instance({rol:req.body.rol, user:req.body.user, passw:req.body.passw});
        
        createUser.save(function(err){
            if(err){
                res.status(500).send({status:"error", message: err.message})
            }else{
                res.status(200).send({status:"succes", message:"ok"}) 
            }
        })

    }
module.exports = {user}