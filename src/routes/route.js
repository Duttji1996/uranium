const express = require('express');
const res = require('express/lib/response');
const userSchema=require('../mongopractise/mongo');

const router = express.Router();

router.post('/test-me1', async function (req, res) {
let data= req.body
let savedData= await userSchema.create(data)
res.send(data);
});

    
    module.exports = router;
// // adding this comment for no reason