const UserModelSchema = require("../models/userDocument")
const jwt = require("jsonwebtoken");
const { decode } = require("jsonwebtoken");

const UserDocument = async function (req, res) {
  let data = req.body;
  let UserDocumentCreate = await UserModelSchema.create(data)
  res.status(201).send(UserDocumentCreate)
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
    return res.status(403).send("username or Password invalid")
  }
  let token = jwt.sign(
    {
      userId: Detailverify._id.toString(),
      batch: "Uranuim",
    },
    "functionup-thorium"          //secret Key
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ MSG: token })
};
// 3rd number question

const GetUserDeatail = async function (req, res) {

  let paramid = req.params.userId
  // console.log("user id in Params:   ", paramid)


  // let decoded = jwt.verify(token, 'functionup-thorium');
  // console.log("decode token:  ", decoded)

  // if(!decoded){
  //   console.log("token is not valid");
  //   return res.send("token is not valid");
  // }


  let UserData = await UserModelSchema.findById(paramid)
  console.log("user details: ", UserData);

  if (!UserData) {

    console.log("User Id not match")
    return res.status(403).send("User ID is not valid ")
  }

  res.status(200).send({ data: UserData })

};

//4th Problem

const UpdateUser = async function (req, res) {

  let ParamsId = req.params.userId;
  
  let data = req.body         // here i am changing mobile number
  console.log("body part: ", data.mobile)


  let UserVerification = await UserModelSchema.findById({ _id: ParamsId })
  if (!UserVerification) {
    return res.status(401).send("user id not valid")
  }

  let UpdateMobile = await UserModelSchema.findByIdAndUpdate({ _id: ParamsId }, { $set: { mobile: req.body.mobile } }, { new: true })   // also i can put anything from which we are receiving from body

  res.status(201).send(UpdateMobile)

}

//Problem 5

const DeleteUser = async function (req, res) {


  let ParamId = req.params.userId
  console.log("UserID: ", ParamId)


  let UserVerification = await UserModelSchema.findById({ _id: ParamId })
  console.log("UserVerification:  ", UserVerification)

  if (!UserVerification) {
    return res.status(401).send("not a valid user or wrong User ID")
  }

  let deleteUsers = await UserModelSchema.findByIdAndUpdate({ _id: ParamId }, { $set: { isDeleted: true } }, { new: true })
  console.log("deletedUser: ", deleteUsers)
  res.status(201).send(deleteUsers)

}

//Problem 6

const UserAutherization= async function(req,res,next){
  let header = req.headers
  let User= req.params.userId

  let findUserDetail= await UserModelSchema.findById(User)
  if(!findUserDetail){
    return res.status(403).send("User Id not found")
  }
  
  let token= header['x-auth-token'] || header["x-Auth-token"];
  
      let decodedToken = jwt.verify( token , "functionup-thorium")
      console.log("decodedToken:  ",decodedToken)

    if(decodedToken.userId!=User){
      console.log("Authorisation Failed")
      return res.status(401).send("Authorisation Failed")
    }
    

    console.log("Everything is okay till now: ",User)
     res.status(200).send(findUserDetail)
  

}


module.exports.DeleteUser = DeleteUser
module.exports.GetUserDeatail = GetUserDeatail;
module.exports.UserDocument = UserDocument;
module.exports.LoginForm = LoginForm;
module.exports.UpdateUser = UpdateUser;
module.exports.UserAutherization=UserAutherization;