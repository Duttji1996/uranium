

const mid1= function(req,res,next){
    let header= req.headers
    console.log("header:  ",header)
    let isFreeAppUser= header.isfreeappuser;
    console.log("under mid1:  ",isFreeAppUser )
    if(!isFreeAppUser){
        return res.send(" the header part is not inclded the isFreeAppUser")
    }
    next()
}

module.exports.mid1=mid1