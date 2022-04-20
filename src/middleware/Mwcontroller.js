

const mid1= async function(req,res,next){
    console.log("we are in Mid 1")
    //res.send("we are in Mid 1")
    next()
}

const mid2= async function(req,res,next){
    console.log("we are in Mid 2")
    next()
}



const mid3= async function(req,res,next){
    console.log("we are in Mid 3")
    next()
}

const mid4= async function(req,res,next){
    console.log("we are in Mid 4")
    // res.send("exit now")
    next()
}

module.exports.mid1=mid1;
module.exports.mid2=mid2;
module.exports.mid3=mid3;
module.exports.mid4=mid4;