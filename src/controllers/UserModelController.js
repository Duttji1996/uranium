const UserModelSchema = require("../models/userDocument")
const jwt = require("jsonwebtoken");
const { decode } = require("jsonwebtoken");

const UserDocument = async function (req, res) {
  let data = req.body;
  let UserDocumentCreate = await UserModelSchema.create(data)
  res.send(UserDocumentCreate)
}

const LoginForm = async function (req, res) {
  let data = req.body
  let header = req.headers
  //console.log("header is given :  ", header);

  let username = data.emailId
  let UserPassword = data.password

  let Detailverify = await UserModelSchema.findOne({ emailId: username, password: UserPassword })
  console.log(Detailverify)

  if (!Detailverify) {
   return  res.send("username or Password invalid")
  }
  let token = jwt.sign(
    {
      userId: Detailverify._id.toString(),
      batch: "Uranuim",
    },
    "functionup-thorium"          //secret Key
  );
  res.setHeader("x-auth-token", token);
  res.send({ MSG: token })
};
// 3rd number question

const GetUserDeatail= async function(req,res){

  let paramid= req.params.userId
  console.log("user id in Params:   ", paramid)

  let header= req.headers;
  console.log('header:  ',header)

  let token= header['x-auth-token'] || header["x-Auth-token"];

  console.log("token are:  ", token);

  if(!token){
   return res.send("x-auth-token is not present in header")
  }
  console.log("decode token  are below ")

  let decodedToken = ''
    try {
         decodedToken = jwt.verify( token , "functionup-thorium")
      } catch(err) {
        return res.send({ status: false , message: "token is invalid"})
      }

  // let decoded = jwt.verify(token, 'functionup-thorium');
  // console.log("decode token:  ", decoded)

  // if(!decoded){
  //   console.log("token is not valid");
  //   return res.send("token is not valid");
  // }

  
  let UserData= await UserModelSchema.findById({_id: paramid})
  console.log("user details: ", UserData);

  if(!UserData){
   
    console.log("User Id not match")
    return res.send("User ID is not valid ") 
  }
  
  res.send({data: UserData })

};

//4th Problem

const UpdateUser= async function(req,res){

  let ParamsId=req.params.userId;
  let header= req.headers
  let data=req.body
  console.log("body part: ",data.mobile)

  //console.log("header:  ", header)

  let token= header['x-auth-token'] || header["x-Auth-token"];
  if(!token){
    return res.send("No token Found")
  }
  let UserVerification= await UserModelSchema.findById({_id:ParamsId})
  if(!UserVerification){
    return res.send("user id not valid")
  }

  let UpdateMobile= await UserModelSchema.findByIdAndUpdate({_id:ParamsId} ,{$set: {mobile: req.body.mobile}}, {new:true})
  
  res.send(UpdateMobile)

}

//Problem 5

const DeleteUser= async function(req,res){
  let header=req.headers
  console.log("header:  ",header)

  let ParamId= req.params.userId
  console.log("UserID: ",ParamId)

  let token= header['x-auth-token'] || header["x-Auth-token"];
  if(!token){
    return res.send("no token present ")
  }
  let UserVerification= await UserModelSchema.findById({_id:ParamId})
  console.log("UserVerification:  ",UserVerification)

  if(!UserVerification){
    return res.send("not a valid user or wrong User ID")
  }

  let deleteUsers= await UserModelSchema.findByIdAndUpdate({_id: ParamId},{$set:{isDeleted: true}},{new:true})
  console.log("deletedUser: ", deleteUsers)
  res.send(deleteUsers)

}

module.exports.DeleteUser=DeleteUser
module.exports.GetUserDeatail=GetUserDeatail;
module.exports.UserDocument = UserDocument;
module.exports.LoginForm = LoginForm;
module.exports.UpdateUser=UpdateUser;