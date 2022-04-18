const express = require('express');
const router = express.Router();
const NewController=require("../controllers/batchandDeveloperController")



router.post("/BatchCreate", NewController.BatchCreate  )
router.post("/DeveloperCreate", NewController.DeveloperCreate  )
router.get("/scholarship-developers", NewController.ProblemA)
router.get("/developers", NewController.ProblemB)


module.exports = router;

