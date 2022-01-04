var express = require('express');
var router = express.Router();
const mysql=require('mysql');
const convert=require('../controller/translate')

/* GET home page. */
router.post('/',convert);

module.exports = router;