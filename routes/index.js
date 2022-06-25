/*
    index.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Web App: Used Car Store
    Date: June 24, 2022
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
