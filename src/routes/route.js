const express = require('express');
const router = express.Router();


const maincontroller=require("../Author_Book_Controller/Controller");

router.post("/Authorcreate", maincontroller.authorCreate  )
router.post("/bookCreate", maincontroller.Bookcreate  )
router.get("/findDetails", maincontroller.findDetails)
router.get("/findAuthor", maincontroller.findAuthor);
router.get("/updatePrice",maincontroller.updatePrice)
router.get("/Findbook", maincontroller.Findbook);



module.exports = router;

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })