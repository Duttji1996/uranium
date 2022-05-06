const collegeModel = require("../models/collegeModel")


const CollegeController = async function (req, res) {

    try {
        let body = req.body

        if (Object.keys(body).length === 0) {
            return res.status(404).send({ Status: false, msg: "Sorry You have not enterd any data to create the account" })
        }
        // validation

        let StringCheck = /^[A-Za-z]{1}[A-Za-z ,]{1,10000}$/

        let StringCheck1 = /^[a-z]{1,}[a-z-]{1,}$/        // regex is use for only college:  abbreviated name

        let CheckUrl= /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        

        if (!body.name) {
            return res.status(404).send({ Status: false, msg: "Please Enter the name , example: iith" })
        }
        if (!body.fullName) {
            return res.status(404).send({ Status: false, msg: "Please enter the fullname of college" })
        }
        if (!body.logoLink) {
            return res.status(404).send({ Status: false, msg: "Sorry You have not enter the logoLink" })
        }

        // starting use to regex
        
        if(!StringCheck1.test(body.name)){
            return res.status(403).send({ Status: false, msg: "name must be in lowercase alphabetic and String.length > 1, special characterS/space/number are not allowed, word will not be start from alphabets space or (-) this" })
        }
        if(!StringCheck.test(body.fullName)){
            return res.status(403).send({ Status: false, msg: "fullName must be alphabetic and String.length > 1 , no special character/number allowed, word will not be start from space this" })
        }
        if(!CheckUrl.test(body.logoLink)){
            return res.status(404).send({ Status: false, msg: "Sorry You have enter the wrong logoLink" })
        }
        
        let checkName= await collegeModel.findOne({name:body.name})

        if(checkName){
            if(checkName.name === body.name){
                return res.status(403).send({Status: false, msg: "Please use another name for college  name, this has been used already"})
            }
        }

        let Data = await collegeModel.create(body)

        return res.status(201).send({ Status: true, msg: Data })
    }
    catch (err) {
        return res.status(404).send({ Status: false, msg: err.message })
    }
}


module.exports.CollegeController = CollegeController