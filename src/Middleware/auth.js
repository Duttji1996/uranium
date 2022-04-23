const jwt = require("jsonwebtoken");


const mid1=  function(req,res,next){
let header=req.headers
    console.log("Mid1 header: ", header)
let token= header['x-auth-token'] || header["x-Auth-token"];
if(!token){
        console.log("no token found")
    return res.status(401).send("Token is not prasent in Header")
}
else{

        console.log("Token Found ready to execute next middleware ")
    next()
}


}

const mid2= function(req,res,next){
    let header=req.headers
    let token= header['x-auth-token'] || header["x-Auth-token"];
    try{
        let decodedToken = jwt.verify( token , "functionup-thorium")
        console.log("token is valid: ",decodedToken)
       next()
    }
    catch(err){
        console.log("Inavlid Token")
        return res.status(400).send("Token is Invalid")
    }
}






module.exports.mid1=mid1;
module.exports.mid2=mid2;
