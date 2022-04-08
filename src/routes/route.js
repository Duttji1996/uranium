const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api, class will be start today, its 8th april ')
});

    // print first 9 natural number sum.
    router.get('/missingArr', function (req, res) {
        let b=[1,2,3,4,5,7,8,9]
        let missing_number ="";
        let sum=0;
        let sumb=0;
        for(let i=1;i<10;i++){
            sum= sum + i;
        }
       for(let j=0; j<b.length;j++){
        sumb=sumb + b[j];
       }
       missing_number=missing_number + (sum-sumb);

       res.send(missing_number);
    });

    router.get('/Missed', function (req, res) {
        let p=[33,34,35,37,38]
        let missing="";
        let SumN= 0;
        let sum=0;
        for(let n=33; n<39;n++){
            SumN=SumN+n;
        }
        for(let m=0;m<p.length;m++){
            sum=sum+p[m];
        }
        missing=missing+(SumN-sum)
        let arr =[];
        arr.push(missing)
        res.send(arr)
        
     
    });
    router.post('/ArrPost', function (req, res) {
        let Body= req.body.likes
        let arr=['Maa Saraswati','Maa Vaishno','Maa Kali','Maa Vindhyawasini','MyFunctionUp']
        arr.push(Body)
           
           res.send(arr)
    });


    
    module.exports = router;
// // adding this comment for no reason