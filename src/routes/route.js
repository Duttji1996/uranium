const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const newController= require("../mainController/allcontroller")




// router.get("/cowin/states", CowinController.getStates)
 router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date


router.get("/getState",newController.getState)                  // Practise

router.get("/getDistricts/:stateid",newController.getDistricts)

router.get("/appointment",newController.appointment)                // 1st problem API

router.post("/getOtp", newController.getOtp)                        // Practise

router.get("/weather",newController.weather)                        // 2nd Problem

router.post("/meme",newController.meme)                             // 3rd Problem API

router.get("/weatherofAllCity",newController.weatherofAllCity)


module.exports = router;