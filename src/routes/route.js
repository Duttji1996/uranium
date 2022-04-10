const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

//assignment problem 1

router.get('/movieList', function (req, res) {
   let movieArr= ["Rang De Basanti","Maa Sarswati","Maa Vaishno","Maa Vindhyawasini","Function UP"]

    res.send( movieArr )
});

//assignment problem 2 & 3

router.get('/movies/:indexNumber', function (req, res) {
    let movieAr= ["Rang De Basanti","Maa Sarswati","Maa Vaishno","Maa Vindhyawasini","Function UP"]
    let index=req.params.indexNumber;
            if(index>movieAr.length-1){
                res.send("no index number match")
                return;
            }
            res.send(movieAr[index]) 
 });

 //assignment problem 4

 router.get('/films', function (req, res) {
    let movieArr= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
 
     res.send( movieArr )
 });

 //assignment problem 5

 router.get('/films/:id', function (req, res) {
     let index= req.params.id;
    let movieArr= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
    for(let i=0; i<movieArr.length;i++){
        if(movieArr[i].id==index){
            res.send(movieArr[i])
            break;
        }
    }
 
     res.send( "no id match with any films" )
 });

module.exports = router;
// // adding this comment for no reason
