const mongoose =require('mongoose')

const url = "mongodb://localhost:27017/Hotel";
module.exports = ()=>{
    const connect= ()=>{
        mongoose.connect(
            url,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            },
            
            (err)=>{
                if(err){
                    console.log("Error")
                }else{
                    console.log("Conexion db exitosa")
                }
            }

        )
    }
    connect();
}