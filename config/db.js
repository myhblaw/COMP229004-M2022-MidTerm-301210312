/*
    db.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Web App: Used Car Store
    Date: June 24, 2022
*/

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://appuser:QUUsy6OT4QAxKPuG@cluster004m2022.pzs5iou.mongodb.net/carstore?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}