const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/test-me', function (req, res) {

    res.send('My first ever api, class will be start today, its 8th april ')
});

    
    module.exports = router;
// // adding this comment for no reason