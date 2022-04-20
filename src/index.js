const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

const { request } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://FunctionUp-Uranium1:GQgLhymenkDpmdlI@cluster0.xmo61.mongodb.net/Prakash-DB6", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next){
        let Date_Time = moment().format('YYYY-MM-d HH:mm:ss ');
        let Ip = req.ip
        //let Route=req.path
        let Route = req.originalUrl
        //let Date_Time= new Date();
        console.log(Date_Time+", "+Ip+", "+Route);
        next()
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
