const express = require('express');
const welcome = require('../logger/logger')
const newdata = require("../util/helper")
const changeCase = require("../validator/formatter")
const _ = require('lodash');


const router = express.Router();

router.get('/test-me', function (req, res) {
    welcome.welcome();
    newdata.printDate;
    newdata.printMonth;
    newdata.getbatchinfo();
    changeCase.trim();
    changeCase.changetoLowercase();
    changeCase.changetoUppercase();

    res.send (" Welcome to Function Up")
    
});

router.get('/hello', function (req, res) {
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    console.log(_.chunk(months, 3));
    const arr=[]
    for (let i=1; i<=20;i++){
        if(i%2==1){
            arr.push(i)
        } 
    }
    console.log(_.tail(arr))
    let a=[1,2,1]
    let b=[2,3,3]
    let c= [2,5,4,6,2]
    let d=[2,5,3,1]
    let e=[1,2,5,8]
    console.log(_.union(a,b,c,d,e))

    const arr1= [["horror","The Shining"] ,["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    console.log(_.fromPairs(arr1))

    res.send (" This is a hello router part ")
    
});


module.exports = router;
// adding this comment for no reason