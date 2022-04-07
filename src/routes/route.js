const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/all-candidates', function (req, res) {
    let arr=["Prakash", "Vikas", "Shubhan","Swati", "Anuj"]
    res.send(arr)
});


// problem 1
router.get('/movies', function (req, res) {
    let arr=["rang de basanti", "the shining", "lord of the rings", "batman begins"]
    res.send(arr)
});

// problem 2 & 3


router.get('/movies/:indexNumber', function (req, res) {
    let arr1=["rang de basanti", "the shining", "lord of the rings", "batman begins"]
    let indexNumber=req.params.indexNumber
    if(indexNumber>arr1.length-1){
        res.send("value is above than index number")
    }
    else{
        res.send(arr1[indexNumber])
    }

    });

    //Problem 4

    router.get('/films', function (req, res) {
        let abcd=[ { id: 1, name: "The Shining" }, {id: 2, name: "Incendies"}, {id: 3, name: "Rang de Basanti"}, { id: 4, name: "Finding Nemo"}]
           
           res.send(abcd)
    });

    //Problem 5

    router.get('/films/:filmId', function (req, res) {
       const  filmId = req.params.filmId

        let obj=[{id: 1, name: "Maa Saraswati"},{id: 2, name: "Maa Vaishno Devi "},{id: 3, name:"Maa Kali"},{id: 4, name: "FunctionUp"}]

        for(let i=0;i<obj.length;i++){
            if(obj[i].id==filmId){
                res.send(obj[i])
                break
            }  
        }
        res.send("no data match")
    });
    
    module.exports = router;
// // adding this comment for no reason